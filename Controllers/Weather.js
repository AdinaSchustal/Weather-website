const { default: axios } = require("axios");
const Weather = require("../Models/Weather");

const getWeather = async (req, res) => {
  try {
    console.log("2");
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=3e1a4e642c8ceb6ba669f52d5ff42e52`
    );
    if (!data) {
      throw new Error();
    }
    console.log("3");
    const weather = new Weather({
      name: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      desc: data.weather[0].description,
      icon: data.weather[0].icon,
      date: Date.now(),
      user: req.user._id,
    });

    await weather.save();
    await req.user.weatherHistory.push(weather._id);
    await req.user.save();
    res.status(200).json({ weather });
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  getWeather,
};
