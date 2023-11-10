const express = require("express");
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Hello. Welcome to Root Path");
});

app.get("/home", (req, res) => {
  res.send("Hello. Welcome to Home Path");
});

app.listen(9004, () => {
  console.log(`Server is running on port 9004`);
});
