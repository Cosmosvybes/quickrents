const express = require("express");
const PORT = 2020;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});
