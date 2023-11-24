const mongoose = require("mongoose");
const Weather = require("./Weather");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  weatherHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Weather",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
