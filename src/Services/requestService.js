import axios from "axios";
import HttpError from "standard-http-error";
import { get } from "lodash";
import { serialize, getLocalstorage } from "../helper";

export const successResponse = response => ({
  status: response.status,
  data: response.data
});

export const throwHttpError = error => {
  if (error.response.data) {
    throw new HttpError(
      get(error, "response.data.status.code"),
      get(error, "response.data.status.message"),
      {
        data: error.response.data
      }
    );
  }

  throw new HttpError(error.response.status, error.response.statusText);
};

export default async (request, httpService = axios) => {
  const { method, data, headers } = request;
  let { url } = request;
  const token = getLocalstorage("token");
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  if (!window.axios_source) {
    window.axios_source = [];
  }
  window.axios_source.push(source);

  if (method === "GET") {
    if (data) {
      url += `?${serialize(data)}`;
    }
  }
  return httpService
    .request({
      method,
      url,
      headers: Object.assign({}, headers),
      data
      //cancelToken: source.token
    })
    .then(successResponse, error => {
      throwHttpError(error);
    });
};
