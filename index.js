const express = require("express");
const mongoose = require("mongoose");
const server = express();
const dotenv = require("dotenv");

dotenv.config();

const routerHandler = require("./routes/auth");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("@@@@@ DATABASE IS CONNECTED @@@@@@"));

server.use(express.json());
server.use("/user/api", routerHandler);

server.listen(3000, () => {
  console.log("@@@@@@@ SERVER IS RUNNING @@@@@@@");
});
