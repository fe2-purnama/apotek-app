const express = require("express");
const router = express.Router();
const {
  addProductToCart,
  viewProductsInCart,
} = require("../controllers/cartController");
const { authenticateToken } = require("../middleware/authenticateToken");

// Base route to check if cartRouter is working
router.get("/", (req, res) => {
  res.send("Cart Router is working!");
});

// Route to add a product to the cart
router.post("/add-product", addProductToCart);

// Route to view products in the cart with authentication
router.get("/items", authenticateToken, viewProductsInCart);

module.exports = router;
