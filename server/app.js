var express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var dotenv = require("dotenv");
var app = express();
var port = 3000;

var authRouter = require("../server/router/authRouter");
const productRouter = require("./router/productRouter");
const cartRouter = require("./router/cartRouter");
const { notFound, errorHandler } = require("./middleware/errorHandler");

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));

app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`port : ${port}`);
});

mongoose.connect(process.env.DB, {}).then(() => {
  console.log("terkoneksi");
});
