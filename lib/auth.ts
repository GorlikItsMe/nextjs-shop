import prisma from "../lib/prisma";
import {
  LoginDTO,
  loginSchema,
  LogoutDTO,
  logoutSchema,
  RefreshTokenDTO,
  refreshTokenSchema,
  RegisterDTO,
  registerSchema,
} from "./authDTO";
import * as bcrypt from "bcrypt";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "./token";

export const register = async (registerDto: RegisterDTO) => {
  const result: RegisterDTO = await registerSchema.validateAsync(registerDto);
  const { email, password } = result;
  const doesExist = await prisma.user.findUnique({ where: { email: email } });
  if (doesExist) {
    throw new Error(`${email} jest już zarejestrowany`);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
    select: {
      password: false,
      email: true,
      id: true,
    },
  });

  const accessToken = await signAccessToken(user.id);
  const refreshToken = await signRefreshToken(user.id);

  return { accessToken, refreshToken };
};

export const login = async (loginDto: LoginDTO) => {
  const result: LoginDTO = await loginSchema.validateAsync(loginDto);
  const { email, password } = result;
  const user = await prisma.user.findUnique({
    rejectOnNotFound: true,
    where: { email },
    select: { password: true, id: true, email: true },
  });
  if (!user) throw new Error("Unauthorized");
  const isMatch = await bcrypt.compare(password, user?.password || "");
  if (!isMatch) throw new Error("Username/password not valid");
  const accessToken = await signAccessToken(user.id);
  const refreshToken = await signRefreshToken(user.id);
  return { accessToken, refreshToken };
};

export const logout = async (logoutDto: LogoutDTO) => {
  const result: LogoutDTO = await logoutSchema.validateAsync(logoutDto);
  const { refreshToken } = result;
  if (!refreshToken) throw new Error("BadRequest");
  const userId = await verifyRefreshToken(refreshToken);

  const user = await prisma.user.update({
    data: { refresh_token: null, access_token: null },
    where: { id: userId },
  });
  if (!user) throw new Error();
  return true;
};

export const refreshToken = async (refreshTokenDto: RefreshTokenDTO) => {
  const result: RefreshTokenDTO = await refreshTokenSchema.validateAsync(
    refreshTokenDto,
    { abortEarly: true }
  );
  const { refreshToken } = result;
  if (!refreshToken) {
    throw new Error("");
  }
  const userId = await verifyRefreshToken(refreshToken);
  const newAccessToken = await signAccessToken(userId);
  const newRefreshToken = await signRefreshToken(userId);
  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};
