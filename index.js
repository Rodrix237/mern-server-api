require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const salt = 10;
const mongoose = require("mongoose");
const User = require("./models/user");

var cors = require("cors");
const app = express();

const MONGO_URL = process.env.MONGO_URL;
const SERVER_PORT = process.env.SERVER_PORT;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Hello. Welcome to Root Path");
});

app.get("/home", (req, res) => {
  res.send("Hello. Welcome to Home Path");
});

mongoose.set("strictPopulate", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(SERVER_PORT, () => {
      console.log(`Server is running on port ${SERVER_PORT}`);
    });
  })
  .catch(() => {
    console.log("Error");
  });
