import prisma from "../lib/prisma";
import JWT from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export const signAccessToken = (userId: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = {
      user: { userId },
    };
    const secret = process.env.ACCESS_TOKEN_SECRET || "RandomToken";
    const options = {
      expiresIn: "60s",
      audience: `${userId}`,
    };
    JWT.sign(payload, secret, options, async (err, token: string) => {
      if (err) {
        reject(new Error());
        return;
      }
      await prisma.user.update({
        where: { id: userId },
        data: { access_token: token },
      });
      resolve(token);
    });
  });
};

export const verifyAccessToken = (
  req: NextApiRequest,
  _res: NextApiResponse
): Promise<{ user: { userId: number } }> => {
  return new Promise((resolve, reject) => {
    if (!req.headers["authorization"]) {
      reject(new Error("Unauthorized"));
      return;
    }

    const authHeader = req.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];
    JWT.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET || "RandomToken",
      async (err, payload) => {
        if (err) {
          const message =
            err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
          reject(new Error(message));
          return;
        }
        if (payload === undefined) {
          reject(new Error("Unauthorized"));
          return;
        }
        //@ts-ignore
        const user = await prisma.user.findUnique({
          where: { id: payload?.user?.userId },
        });
        if (user?.access_token !== token) {
          reject(new Error("Unauthorized"));
          return;
        }
        resolve(payload);
        return;
      }
    );
  });
};

export const signRefreshToken = (userId: number): Promise<string> =>
  new Promise((resolve, reject) => {
    const payload = {
      user: { userId },
    };
    const secret = process.env.REFRESH_TOKEN_SECRET || "RandomRefreshToken";
    const options = {
      expiresIn: "1y",
      audience: `${userId}`,
    };
    JWT.sign(payload, secret, options, async (err, token: string) => {
      if (err) {
        reject(new Error());
      }
      await prisma.user.update({
        where: { id: userId },
        data: { refresh_token: token },
      });
      resolve(token);
    });
  });

export const verifyRefreshToken = (refreshToken: string): Promise<number> =>
  new Promise((resolve, reject) => {
    JWT.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET || "RandomRefreshToken",
      async (err, payload: any) => {
        if (err) return reject(new Error("Unauthorized"));
        const userId: string | undefined = payload.aud;
        if (!userId) {
          throw new Error("Unauthorized");
        }
        const user = await prisma.user.findUnique({ where: { id: +userId } });
        if (!user) {
          reject(new Error("Unauthorized"));
        }
        if (refreshToken === user?.refresh_token) return resolve(+userId);
        reject(new Error("Unauthorized"));
      }
    );
  });
