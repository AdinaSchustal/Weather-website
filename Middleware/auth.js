const User = require("../Models/User");
const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  console.log('1');
  const token = req.headers["authorization"];
  const userDecoded = jwt.verify(token, process.env.SECRET);
  const user = await User.findById(userDecoded);
  if (!user) res.status(404).send("Login!");
  req.user = user;
  next();
};

module.exports = verifyUser;
