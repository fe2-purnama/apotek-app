const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Produk = require("../models/Cart");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const mongoose = require("mongoose");
const Transaction = require("../models/Transaction");

function getUserIdFromToken(req) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    return decoded.id;
  } catch (error) {
    console.error("Error getting user ID from token:", error);
    return null;
  }
}

const checkoutCartItems = async (req, res) => {
  const userId = getUserIdFromToken(req);
  if (!userId) {
    return res.status(401).send("User not authenticated");
  }

  const { cartItemIds } = req.body;
  if (!cartItemIds || cartItemIds.length === 0) {
    return res.status(400).send("No cart items selected for checkout");
  }

  try {
    const objectIdUserId = new mongoose.Types.ObjectId(userId);

    const cartItems = await Cart.find({
      _id: { $in: cartItemIds.map((id) => new mongoose.Types.ObjectId(id)) },
      id_user: objectIdUserId,
      status: false,
    }).populate("id_product");

    if (cartItems.length !== cartItemIds.length) {
      return res
        .status(400)
        .send(
          "Some items are already checked out, do not belong to the user, or do not exist."
        );
    }

    for (let item of cartItems) {
      const product = await Product.findById(item.id_product);
      if (product.stock_product < item.quantity) {
        return res
          .status(400)
          .send(`Not enough stock for product: ${product.name_product}`);
      }
    }

    for (let item of cartItems) {
      await Product.updateOne(
        { _id: item.id_product },
        { $inc: { stock_product: -item.quantity } }
      );
    }

    const transactionCode = await generateUniqueTransactionCode(objectIdUserId);
    await Cart.updateMany(
      {
        _id: { $in: cartItemIds.map((id) => new mongoose.Types.ObjectId(id)) },
      },
      { $set: { status: true, transaction_code: transactionCode } }
    );

    const totalBill = cartItems.reduce(
      (total, item) => total + item.quantity * item.id_product.price_product,
      0
    );

    const newTransaction = new Transaction({
      transaction_code: transactionCode,
      transaction_date: new Date(),
      total_bill: totalBill,
    });
    await newTransaction.save();

    res.status(201).send({
      message: "Checkout successful",
      transaction_code: transactionCode,
      total_bill: totalBill,
    });
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).send("Internal Server Error");
  }
};

async function generateUniqueTransactionCode(userId) {
  const date = new Date();
  const dateString = `${date.getFullYear()}${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}${date
    .getHours()
    .toString()
    .padStart(2, "0")}${date.getMinutes().toString().padStart(2, "0")}`;
  const transactionPrefix = `AMP${dateString}`;
  let transactionCode;
  let isUnique = false;
  let attempts = 0;

  while (!isUnique && attempts < 5) {
    const transactionCount = await Cart.countDocuments({
      transaction_code: { $regex: `^${transactionPrefix}` },
    });
    transactionCode = `${transactionPrefix}${(transactionCount + 1)
      .toString()
      .padStart(3, "0")}`;
    const existingTransaction = await Transaction.findOne({
      transaction_code: transactionCode,
    });
    if (!existingTransaction) {
      isUnique = true;
    }
    attempts++;
  }

  return transactionCode;
}

async function calculateTotalBill(cartItemIds, userId) {
  const cartItemsWithDetails = await Cart.aggregate([
    {
      $match: {
        _id: { $in: cartItemIds.map((id) => new mongoose.Types.ObjectId(id)) },
        id_user: userId,
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "id_product",
        foreignField: "_id",
        as: "product_info",
      },
    },
    { $unwind: "$product_info" },
    {
      $project: {
        quantity: 1,
        price: "$product_info.price_product",
      },
    },
  ]);

  return cartItemsWithDetails.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
}

module.exports = {
  checkoutCartItems,
  generateUniqueTransactionCode,
  calculateTotalBill,
};
