
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    mensaje: "API funcionando",
    db: process.env.DB_HOST || "no definido"
  });
});

app.get("/salud", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});

