const { MongoClient } = require("mongodb");
const url =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6";
const databaseName = "E-comm";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  const db = result.db(databaseName);
  return db.collection("products");
}

module.exports = dbConnect;
