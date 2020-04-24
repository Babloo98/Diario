import axios from "axios";
import { setLocalstorage } from "./helper";
import { get } from "lodash";

export default {
  setupInterceptors: (store, history) => {
    axios.interceptors.response.use(
      response => {
        if (get(response, "headers.token")) {
          setLocalstorage("token", get(response, "headers.token"));
        }
        return response;
      },
      error => {
        if (get(error, "response.status") === 401) {
          localStorage.clear();
          sessionStorage.clear();
        }
        if (get(error, "response.status") === 403) {
          toast.error(error.response.message || 'error 403');
        }
        if (get(error, "response.status") === 500) {
          if (
            error &&
            error.message !== "Request aborted" &&
            error.message !== "Operation canceled"
          ) {
            history.push(PATHS.SERVER_ERROR);
          }
        }
        if (get(error, "response.status") >= 502) {
          if (
            error &&
            error.message !== "Request aborted" &&
            error.message !== "Operation canceled"
          ) {
            history.push(PATHS.SOMETHING_WENT_WRONG);
          }
        }
        return Promise.reject(error);
      }
    );
  }
};
