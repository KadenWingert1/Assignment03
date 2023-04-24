var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(bodyParser.json());

// Mongo
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);

const port = "3000";
const host = "127.0.0.1";

app.get("/listUsers", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db
    .collection("users_edu")
    .find(query)
    .limit(100)
    .toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

app.get("/:id", async (req, res) => {
  const user = "user" + req.params.id + ".id";
  const userid = Number(req.params.id);
  console.log("User to find :", user, " id :", userid);
  await client.connect();
  console.log("Node connected successfully to GET-id MongoDB");
  const query = { [user]: userid };
  const results = await db.collection("users_edu").findOne(query);
  console.log("Results :", results);
  if (!results) res.send("Not Found").status(404);
  else res.send(results).status(200);
});

app.post("/addUser", async (req, res) => {
  await client.connect();
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  const k = keys[0];
  const v = values[0];
  console.log("Keys :", k, " Values", v);
  const newDocument = { _id: "600", [k]: [v] };
  const results = await db.collection("users_edu").insertOne(newDocument);
  res.status(200);
  res.send(results);
});

app.delete("/deleteUser", async (req, res) => {
  await client.connect();
  const keys = Object.keys(req.body);
  const k = keys[0];
  const query = { [k]: { $exists: true } };
  const results = await db.collection("users_edu").deleteOne(query);
  res.status(200);
  res.send(results);
});

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});
