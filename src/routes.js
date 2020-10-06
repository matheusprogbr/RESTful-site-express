const express = require("express");
const routes = express.Router();

const { index } = require("./controllers/products");

routes.get("/", (req, res) => {
  return res.redirect("/products");
});
routes.get("/products", index);

module.exports = routes;
