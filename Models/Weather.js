const mongoose = require("mongoose");

const weatherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  temp: {
    type: Number,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Weather", weatherSchema);
