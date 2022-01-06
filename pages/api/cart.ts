import { NextApiRequest, NextApiResponse } from "next";
import { getCart } from "../../lib/shopApi";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cartIdRaw = req.cookies["cart_id"];
  let cartId = 0;
  if (cartIdRaw == undefined || isNaN(parseInt(cartIdRaw))) {
    res.status(400).json([]);
    return;
  } else {
    cartId = parseInt(cartIdRaw);
  }

  const cart = await getCart(cartId);
  res.status(200).json(cart);
  return;
};
