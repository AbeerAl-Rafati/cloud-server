"use strict";

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("./public"));

app.get("/hello", (req, res) => {
  res.status(200).send("Helloooo in 401 aws server =D");
});

app.get("/bad", (req, res) => {
  throw new Error("Errooooooooooorrrrrrrrrrrrrrrr");
});

app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
