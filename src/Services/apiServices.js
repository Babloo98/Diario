import GlobalConfig from "../GlobalConfig";

export const loginForm = (data = {}) => ({
  method: "POST",
  headers: GlobalConfig.getHeaders(["JSON"]),
  url: GlobalConfig.getApiUrlFromRoot("/login"),
  data: { ...data }
});

export const registerForm = (data = {}) => ({
  method: "POST",
  headers: GlobalConfig.getHeaders(["JSON"]),
  url: GlobalConfig.getApiUrlFromRoot("/register"),
  data: { ...data }
});