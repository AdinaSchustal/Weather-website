const User = require("../Controllers/User");
const router = require("express").Router();
const auth = require("../Middleware/auth");
const Weather = require("../Controllers/Weather");

router.post("/newUser", User.newUser);
router.post("/login", User.login);
router.get("/getWeather/:city", auth, Weather.getWeather);
router.get("/getWeatherHistory", auth, User.getWeatherHistory);

module.exports = router;
