import { NextApiRequest, NextApiResponse } from "next";
import { logout } from "../../../lib/auth";
import Cookies from "cookies";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res);
  cookies.set("refresh_token", "", {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
  });
  try {
    await logout({ refreshToken: req.cookies.refresh_token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  res.status(200).json({ message: "Wylogowano" });
  return;
};
