const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  id_detail_transaction: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true],
    ref: "TransactionDetail",
  },
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true],
    ref: "User",
  },
  total_price: {
    type: Number,
    required: [true],
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
