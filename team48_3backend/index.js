const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Product = require("./dataSchema.js");
app.use(express.json());
app.use(cors());

app.use(express.static("public"));
app.use("./images", express.static("images"));

mongoose.connect("mongodb://127.0.0.1:27017/reactdata", {
  dbName: "reactdata",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const port = process.env.PORT || 4000;
const host = "localhost";

app.get("/", async (req, resp) => {
  const query = {};
  const allProducts = await Product.find(query);
  console.log(allProducts);
  resp.send(allProducts);
});
app.get("/:id", async (req, resp) => {
  const id = req.params.id;
  const query = { _id: id };
  const oneProduct = await Product.findOne(query);
  console.log(oneProduct);
  resp.send(oneProduct);
});

app.post("/add", async (req, res) => {
  console.log("Request body:", req.body);
  let product = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      rating: req.body.rating
  });

  console.log("Product to be saved:", product);

  try {
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});






app.listen(port, () => {
  console.log(`App listening at http://%s:%s`, host, port);
});
