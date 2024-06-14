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

const addProductToCart = async (req, res) => {
  const userId = getUserIdFromToken(req);
  if (!userId) {
    return res.status(401).send("User not authenticated");
  }

  const { id_product, quantity } = req.body;
  if (!id_product || !quantity) {
    return res.status(400).send("All input fields are required");
  }

  try {
    const product = await Product.findById(id_product);
    if (!product) {
      return res.status(404).send("Product not found");
    }

    if (product.stock_product < quantity) {
      return res.status(400).send("Insufficient stock available");
    }
    let cart = await Cart.findOne({
      id_user: userId,
      id_product: id_product,
      status: false,
      transaction_code: null,
    });

    if (!cart) {
      cart = new Cart({
        id_product,
        id_user: userId,
        quantity,
        status: false,
        transaction_code: null,
      });
    } else {
      cart.quantity += quantity;
    }

    await cart.save();
    res.status(201).send({
      message: "Product successfully added to cart",
      data: cart,
    });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).send("Internal Server Error");
  }
};

const viewProductsInCart = async (req, res) => {
  const userId = getUserIdFromToken(req);
  if (!userId) {
    return res.status(401).send("User not authenticated");
  }

  const objectIdUserId = new mongoose.Types.ObjectId(userId);

  try {
    const cartItems = await Cart.aggregate([
      { $match: { id_user: objectIdUserId, status: false } },
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
          _id: 0,
          name_product: "$product_info.name_product",
          price_product: "$product_info.price_product",
          group_product: "$product_info.group_product",
          quantity: "$quantity",
          total_price: {
            $multiply: ["$quantity", "$product_info.price_product"],
          },
        },
      },
    ]);
    console.log(JSON.stringify(cartItems, null, 2));
    res.status(200).send(cartItems);
  } catch (error) {
    console.error("Error retrieving cart items:", error);
    res.status(500).send("Internal Server Error");
  }
};

const editCartItemQuantity = async (req, res) => {
  const userId = getUserIdFromToken(req);
  if (!userId) {
    return res.status(401).send("User not authenticated");
  }

  const { cartItemId, quantityChange, operation } = req.body;
  if (!cartItemId || quantityChange == null || !operation) {
    return res
      .status(400)
      .send("Cart item ID, quantity change, and operation type are required");
  }

  try {
    const cartItem = await Cart.findOne({
      _id: cartItemId,
      id_user: userId,
      status: false,
    }).populate("id_product");

    if (!cartItem) {
      return res.status(404).send("Cart item not found");
    }

    const product = await Product.findById(cartItem.id_product);
    if (!product) {
      return res.status(404).send("Product not found");
    }

    if (operation === "increase") {
      if (product.stock_product < cartItem.quantity + quantityChange) {
        return res.status(400).send("Insufficient stock available");
      }
      cartItem.quantity += quantityChange;
    } else if (operation === "decrease") {
      if (cartItem.quantity < quantityChange) {
        return res
          .status(400)
          .send("Decrease amount exceeds the current quantity");
      }
      cartItem.quantity -= quantityChange;
      if (cartItem.quantity === 0) {
        await cartItem.remove();
        return res.status(200).send("Cart item has been removed");
      }
    } else {
      return res.status(400).send("Invalid operation type");
    }

    await cartItem.save();
    res.status(200).send({
      message: `Cart item quantity ${operation}d successfully`,
      data: cartItem,
    });
  } catch (error) {
    console.error(`Error ${operation}ing cart item quantity:`, error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  addProductToCart,
  viewProductsInCart,
  editCartItemQuantity,
};
