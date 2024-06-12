const express = require("express");
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoute");

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  console.log("Connected....");
});

const app = express();
app.use(bodyParser.json());

app.use("/auth", authRoute);

app.listen(5500, () => {
  console.log("Server Started....");
});
