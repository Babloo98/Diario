import * as apiServices from "../Services/apiServices";
import request from "../Services/requestService";
import { LOGIN_ACTION } from "../constant";
import { get } from "lodash";

export const loginAction = (requestMethod = request, params) => {
  return function(dispatch) {
    dispatch({
      type: LOGIN_ACTION.LOGIN_START
    });
    return requestMethod(apiServices.loginForm(params))
      .then(loginResp => {
        const user_data = get(loginResp, "data");
        dispatch({
          type: LOGIN_ACTION.LOGIN_SUCCESS,
          user_data
        });
      })
      .catch(() => {
        dispatch({
          type: LOGIN_ACTION.LOGIN_FAILURE
        });
      });
  };
};