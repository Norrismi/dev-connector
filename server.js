const express = require("express");
const mongoose = require("mongoose");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
