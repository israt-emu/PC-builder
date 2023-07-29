// pages/api/getData.js
import {NextApiRequest, NextApiResponse} from "next";
import dbConnect from "../dbConnect";

export default async function getProducts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dbCollection = await dbConnect();

    if (req.method === "GET") {
      const products = await dbCollection.find({}).toArray();

      res.send({message: "success", status: 200, data: products});
    }
  } catch (error) {
    res.status(500).json({error: "Error fetching data from MongoDB"});
  }
}
