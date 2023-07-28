import type {NextApiRequest, NextApiResponse} from "next";

import {MongoClient, ServerApiVersion} from "mongodb";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4g4am.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function dbConnect() {
  try {
    await client.connect();

    const productsCollection = client.db("Pc_builder").collection("pc_builder");

    // if (req.method === "GET") {
    //   const products = await productsCollection.find({}).toArray();
    //   res.send({message: "success", status: 200, data: products});
    // }
    return productsCollection;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default dbConnect;
