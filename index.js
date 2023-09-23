const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6";
const database = "E-comm";
const client = new MongoClient(url);

async function getData() {
  await client.connect();
  const db = client.db(database);
  const collection = db.collection("products");
  const result = await collection.find({}).toArray();
  console.log(result);
}

getData()
