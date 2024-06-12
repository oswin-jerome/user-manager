const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: String,
  otp: Number,
});

module.exports = {
  User,
};
