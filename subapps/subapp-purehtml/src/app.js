const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const public = path.join(__dirname, "public");
const port = "3002";

app.get("/", function (req, res) {
  res.sendFile(public);
});

app.use(cors());
app.use("/", express.static(public));

app.listen(port, function () {
  console.log("Express server is running!");
});
