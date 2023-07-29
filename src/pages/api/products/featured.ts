// pages/api/getData.js
import {NextApiRequest, NextApiResponse} from "next";
import dbConnect from "../dbConnect";
import {ObjectId} from "mongodb";

export default async function getFeaturedProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dbCollection = await dbConnect();

    if (req.method === "GET") {
      const randomProducts = await dbCollection.aggregate([{$sample: {size: 6}}]).toArray();

      res.send({message: "success", status: 200, data: randomProducts});
    }
  } catch (error) {
    res.status(500).json({error: "Error fetching data from MongoDB"});
  }
}
