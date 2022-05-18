import { NextApiRequest, NextApiResponse } from "next";
import { login } from "../../../lib/auth";
import Cookies from "cookies";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST") {
    return res.status(400).json({ message: "POST method required" });
  }

  let result: {
    accessToken: string;
    refreshToken: string;
  };
  try {
    result = await login(req.body);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  const cookies = new Cookies(req, res);
  cookies.set("refresh_token", result.refreshToken, {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
  });

  res
    .status(200)
    .json({ message: "Zalogowano", accessToken: result.accessToken });
  return;
};
