import * as apiServices from "../Services/apiServices";
import request from "../Services/requestService";
import { REG_ACTION } from "../constant";
import { get } from "lodash";

export const registerAction = (requestMethod = request, params) => {
    return function(dispatch) {
      dispatch({
        type: REG_ACTION.REG_START
      });
      return requestMethod(apiServices.registerForm(params))
        .then(regResp => {
            console.log('Register Payload', params)
          const reg_data = get(regResp, "data");
          dispatch({
            type: REG_ACTION.REG_SUCCESS,
            reg_data
          });
        })
        .catch(() => {
          dispatch({
            type: REG_ACTION.REG_FAILURE
          });
        });
    };
  };
  