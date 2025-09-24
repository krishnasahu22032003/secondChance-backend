const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URI);

async function connectToDatabase() {
  await client.connect();   // REQUIRED LINE
  return client.db("secondChance");
}

module.exports = { connectToDatabase };
