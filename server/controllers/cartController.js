const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Produk = require("../models/Cart");
const Cart = require("../models/Cart");
const Product = require("../models/Product"); // Pastikan path ini benar
const mongoose = require("mongoose"); // Import mongoose

// Function to get user ID from request
function getUserIdFromToken(req) {
  try {
    // Ambil token dari header Authorization
    const token = req.headers.authorization.split(" ")[1]; // 'Bearer TOKEN_HERE'
    // Verifikasi dan decode token menggunakan secret key dari .env
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    return decoded.id; // Pastikan payload token Anda memiliki field 'id'
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
    // Cek apakah sudah ada kode_cart untuk user ini
    let cart = await Cart.findOne({
      id_user: userId,
      id_product: id_product,
      status: false,
    });

    if (!cart) {
      // Insert new item into the cart if it does not exist or if the existing item has been checked out (status 1)
      cart = new Cart({
        id_product,
        id_user: userId,
        quantity,
        status: false, // 0 means not checked out
      });
    } else {
      // If the item exists and has not been checked out, just update the quantity
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

  // Correctly convert userId to ObjectId using 'new'
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

module.exports = {
  addProductToCart,
  viewProductsInCart,
};
