const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB Connection Established Successfully ")
);

app.use(cors());
app.use(express.json());

app.use("", require(__dirname + "/routes/handler.Task"));

app.listen(port, () => {
  console.log("\nServer is running on port: ");
  console.log(port);
});
