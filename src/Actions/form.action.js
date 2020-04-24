import * as apiServices from "../Services/apiServices";
import request from "../Services/requestService";
// import { setLocalstorage } from "../helper";
import { FORM_ACTION } from "../constant";
import { get } from "lodash";

// export const contactFormAction = (requestMethod = request, params) => {
//   // console.log('Params Actinnnnnnn called', params);
//   return function(dispatch) {
//     dispatch({
//       type: FORM_ACTION.FORM_START
//     });
//     return requestMethod(apiServices.contactForm(params))
//       .then(formResp => {
//         const payload = get(formResp, "data");
//         dispatch({
//           type: FORM_ACTION.FORM_SUCCESS,
//           payload
//         });
//       })
//       .catch(() => {
//         dispatch({
//           type: FORM_ACTION.FORM_FAILURE
//         });
//       });
//   };
// };