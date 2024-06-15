const express = require("express");
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoute");
const profileRoute = require("./routes/profileRoute");
var cors = require("cors");

const mongoose = require("mongoose");
const { allowOnlyLoggedInUser } = require("./middlewares/authMiddleware");
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  console.log("Connected....");
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRoute);
app.use("/profile", allowOnlyLoggedInUser, profileRoute);
app.get("/", allowOnlyLoggedInUser, (req, res) => {
  res.send("Home");
});
app.listen(5500, () => {
  console.log("Server Started....");
});
