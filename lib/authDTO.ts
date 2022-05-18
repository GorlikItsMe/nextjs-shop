import * as Joi from "joi";

export interface RegisterDTO {
  email: string;
  password: string;
}

export const registerSchema = Joi.object<RegisterDTO>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export interface LoginDTO {
  email: string;
  password: string;
}

export const loginSchema = Joi.object<LoginDTO>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export interface LogoutDTO {
  refreshToken: string;
}

export const logoutSchema = Joi.object<LogoutDTO>({
  refreshToken: Joi.string().required(),
});

export interface RefreshTokenDTO {
  refreshToken: string;
}

export const refreshTokenSchema = Joi.object<RefreshTokenDTO>({
  refreshToken: Joi.string().required(),
});
