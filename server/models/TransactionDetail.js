const mongoose = require("mongoose");

const transactionDetailSchema = new mongoose.Schema({
  id_cart: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true],
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: [true],
  },
  status: {
    type: Boolean,
    required: [true],
  },
});

const TransactionDetail = mongoose.model(
  "TransactionDetail",
  transactionDetailSchema
);

module.exports = TransactionDetail;
