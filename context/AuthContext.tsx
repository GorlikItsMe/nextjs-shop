import { createContext, useEffect, useState } from "react";
import axiosBase, { AxiosError, AxiosResponse } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const axios = axiosBase.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

createAuthRefreshInterceptor(axios, (failedRequest) =>
  axios.post("/api/auth/refreshToken").then((resp) => {
    const { accessToken } = resp.data;
    const bearer = `Bearer ${accessToken}`;
    axios.defaults.headers.common["Authorization"] = bearer;

    // Set up access token of the failed request.
    failedRequest.response.config.headers.Authorization = bearer;

    // Retry the request with new setup!
    return Promise.resolve();
  })
);

function loginApi(
  email: string,
  password: string
): Promise<{ accessToken: string }> {
  return new Promise((resolve, reject) => {
    return axios
      .post("/api/auth/login", {
        email,
        password,
      })
      .then((r: AxiosResponse) => {
        resolve(r.data);
      })
      .catch((err) => {
        reject(err.response.data?.message);
      });
  });
}

function registerApi(email: string, password: string) {
  return new Promise((resolve, reject) => {
    return axios.post("/api/auth/register", {
      email,
      password,
    });
  });
}

function logoutApi() {
  return new Promise((resolve, reject) => {
    return axios.post("/api/auth/logout");
  });
}

function meApi() {
  return axios
    .get("/api/me")
    .then((r) => {
      return r.data;
    })
    .catch((err) => {
      return err.response.data.message;
    });
}

const defaultValues = {
  register: (email: string, password: string) => {},
  login: (email: string, password: string) => {},
  logout: () => {},
  getUserDetails: () => {},
};

export const AuthContext = createContext(defaultValues);

export const AuthContextProvider = ({ children }: { children: any }) => {
  return (
    <AuthContext.Provider
      value={{
        register: registerApi,
        login: loginApi,
        logout: logoutApi,
        getUserDetails: meApi,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
