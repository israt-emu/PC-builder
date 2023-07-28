// pages/api/getData.js
import {NextApiRequest, NextApiResponse} from "next";
import dbConnect from "../dbConnect";
import {ObjectId} from "mongodb";

export default async function getProducts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dbCollection = await dbConnect();
    const {productId} = req.query;
    var id = new ObjectId(productId as string);

    const data = await dbCollection.findOne({_id: id});
    res.send({message: "success", status: 200, data: data});
  } catch (error) {
    res.status(500).json({error: "Error fetching data from MongoDB"});
  }
}
