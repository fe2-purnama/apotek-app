const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  transaction_code: {
    type: String,
    required: true,
    unique: true,
  },
  transaction_date: {
    type: Date,
    required: true,
  },
  total_bill: {
    type: Number,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
