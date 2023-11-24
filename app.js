const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./Routes/api");
const bodyParser = require("body-Parser");
require("./startup/cors")(app);
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origion", "*");
  next();
});

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect('mongodb+srv://adina:adina@adinatest.cphd8f3.mongodb.net/', connectionParams)//.connect(process.env.DB_CONNECTION, connectionParams)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("error:", err);
  });

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
