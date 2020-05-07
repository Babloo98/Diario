import GlobalConfig from "../GlobalConfig";

export const loginForm = (data = {}) => ({
  method: "POST",
  headers: GlobalConfig.getHeaders(["JSON"]),
  url: GlobalConfig.getApiUrlFromRoot("/login"),
  data: { ...data }
});

// export const yogaTable = (data = {}) => ({
//   method: "GET",
//   headers: GlobalConfig.getHeaders(["JSON"]),
//   url: GlobalConfig.getApiUrlFromRoot("/yogaStudio"),
//   data: { ...data }
// });