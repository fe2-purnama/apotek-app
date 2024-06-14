const express = require("express");
const router = express.Router();
const {
  addProductToCart,
  viewProductsInCart,
  editCartItemQuantity,
} = require("../controllers/cartController");
const { authenticateToken } = require("../middleware/authenticateToken");

router.get("/", (req, res) => {
  res.send("Cart Router is working!");
});

router.post("/add-cart-item", authenticateToken, addProductToCart);
router.get("/cart-items", authenticateToken, viewProductsInCart);
router.post("/edit-cart-item", authenticateToken, editCartItemQuantity);

module.exports = router;
