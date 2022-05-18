import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { verifyAccessToken } from "../../lib/token";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let result;
  try {
    result = await verifyAccessToken(req, res);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  const userId = result.user.userId;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { email: true, id: true },
  });

  return res.status(200).json({ ...user });
};
