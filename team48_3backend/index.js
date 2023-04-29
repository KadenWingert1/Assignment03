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

app.listen(port, () => {
  console.log(`App listening at http://%s:%s`, host, port);
});

app.post("/insert", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/remove/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    await Product.deleteOne({ _id: productId });
    res.json({ message: `Product ${productId} removed correctly` });
  } catch (err) {
    console.log("Error while removing the product:" + err);
  }
});


