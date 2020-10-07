const axios = require("axios");

const index = async (req, res) => {
  try {
    const result = await axios.get("http://localhost:3500/api/v1/products");
    const products = result.data.data;
    return res.render("products", { products });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
};
