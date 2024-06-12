const jwt = require("jsonwebtoken");

const allowOnlyLoggedInUser = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const payload = jwt.verify(token, "kskallalldjskdjsjkjksdjksjkdkj");
    req.user = payload.user;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Token not valid" });
  }
};

module.exports = {
  allowOnlyLoggedInUser,
};
