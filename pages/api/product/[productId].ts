import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getProductById } from "../../../lib/shopApi";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const productId = req.query["productId"] as string;
  let pid = parseInt(productId);
  if (isNaN(pid)) {
    return res.status(400).json({ message: "Id must be number" });
  }

  const productObj = await getProductById(pid);
  if (productObj == undefined) {
    res.status(404).json({ error: "not found" });
    return;
  }
  res.status(200).json(productObj);
};
