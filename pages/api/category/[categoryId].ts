import prisma from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const categoryId = req.query["categoryId"] as string;
  let cid = parseInt(categoryId);
  if (isNaN(cid)) {
    return res.status(400).json({ message: "Id must be number" });
  }

  const productList = await prisma.category.findFirst({
    where: {
      id: cid,
    },
    include: {
      Product: {
        where: {
          published: true,
          stockAmount: {
            not: 0,
          },
        },
        select: {
          id: true,
          name: true,
          desc: true,
          price: true,
        },
      },
    },
  });
  res.status(200).json(productList);
};
