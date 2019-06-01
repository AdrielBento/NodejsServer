const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  const jsonMessage = { nome: "thiago", idade: "24" };
  res.send(jsonMessage);
});

app.listen(3000);