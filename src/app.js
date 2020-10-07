const express = require("express");
const routes = require("./routes");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("/public"));
app.use(routes);

app.listen(3000, () => {
  console.log("Server is running!");
});
