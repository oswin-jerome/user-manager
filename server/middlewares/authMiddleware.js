const jwt = require("jsonwebtoken");

const allowOnlyLoggedInUser = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const payload = jwt.verify(token.split(" ")[1], "kskallalldjskdjsjkjksdjksjkdkj");
    req.user = payload.user;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Token not valid" });
  }
};

module.exports = {
  allowOnlyLoggedInUser,
};
