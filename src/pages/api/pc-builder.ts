import type {NextApiRequest, NextApiResponse} from "next";

type Data = {
  name: string;
};

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

async function run(req: NextApiRequest, res: NextApiResponse) {
  try {
    await client.connect();

    const pcPartsCollection = client.db("Pc_builder").collection("pc_builder");

    console.log(" You successfully connected to MongoDB!");
    if (req.method === "GET") {
      res.send({message: "success", status: 200});
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;
