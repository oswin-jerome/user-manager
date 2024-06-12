const { User } = require("../models/User");

const Router = require("express").Router;

const router = Router();

router.post("/login", (req, res) => {
  //   new User({
  //     name: "Oswin",
  //     email: "oswinjeromej@gmail.com",
  //   }).save();
  res.send("Login...");
});

router.post("/register", async (req, res) => {
  const data = req.body;
  const user = new User(data);
  const doc = await user.save();
  res.send(doc);
});

module.exports = router;
