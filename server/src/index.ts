import express from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";

import "./loadEnvironment.js";
import "express-async-errors";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());
// if (!process.env.MONGO_URI) {
//   throw new Error("MONGO_URI is not in env");
// }
const client = new MongoClient('mongodb://localhost:27017');

async function main() {
  await client.connect();
  const db = client.db('zovpet');

  app.get("/pets", async (req, res: express.Response) => {
    const status = req.query.status as string;
    let collection = await db.collection('pets');
    const filter = status && status !== 'all' ? { status: status } : {};

    let results = await collection.find(filter)
      .limit(50)
      .toArray();
    res.send(results).status(200);
  });

  app.post("/form", async (req, res: express.Response) => {
    let collection = await db.collection("pets");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });


  // Get a single post
  app.get("/:id", async (req, res: express.Response) => {
    let collection = await db.collection("pets");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

  // Delete an entry
  app.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    const query = { _id: new ObjectId(req.params.id) };
    const collection = db.collection("pets");
    let result = await collection.deleteOne(query);
    console.log('DOCUMENT HAS BEEN DELETED');

    res.send(result).status(200);
  });

  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

main()
  .catch(err => {
    console.error("Error starting server:", err);
  })
  .finally(() => {
    // client?.close();
  });
