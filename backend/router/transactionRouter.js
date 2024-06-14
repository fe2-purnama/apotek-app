const express = require("express");
const router = express.Router();
const { checkoutCartItems } = require("../controllers/transactionController");
const { authenticateToken } = require("../middleware/authenticateToken");

router.get("/", (req, res) => {
  res.send("transaction Router is working!");
});

router.post("/checkout", authenticateToken, checkoutCartItems);

module.exports = router;
