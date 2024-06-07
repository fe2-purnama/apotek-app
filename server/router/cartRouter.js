const express = require("express");
const router = express.Router();
const {
  addProductToCart,
  viewProductsInCart,
} = require("../controllers/cartController");
const { authenticateToken } = require("../middleware/authenticateToken");

router.get("/", (req, res) => {
  res.send("Cart Router is working!");
});

router.post("/add-product", addProductToCart);

router.get("/items", authenticateToken, viewProductsInCart);

module.exports = router;
