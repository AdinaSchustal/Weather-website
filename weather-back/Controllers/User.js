const User = require("../Models/User");
const jwt = require("jsonwebtoken");

const newUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ jwt: toJwt(user), name: user.name });
  } catch (err) {
    res.status(500).json(err);
  }
};

const toJwt = (user) => {
  const token = jwt.sign(user._id.toJSON(), process.env.SECRET);
  return token;
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) res.status(404).send("incorrect password!");
    res.status(200).json({ jwt: toJwt(user), name: user.name });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getWeatherHistory = async (req, res) => {
  try {
    const { weatherHistory } = await User.findById(req.user._id).populate(
      "weatherHistory"
    );
    res.status(200).send(weatherHistory);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  newUser,
  login,
  getWeatherHistory,
};
