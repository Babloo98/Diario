import { LOGIN_ACTION, STATUS } from "../constant";

const initState = {
  data: [],
  loginStatus: null
}

export default function loginReducer(state = initState, action) {
  switch(action.type){
    case LOGIN_ACTION.LOGIN_START:
      return{ 
        ...state, 
        loginStatus: STATUS.LOADING
      };
    case LOGIN_ACTION.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.user_data,
        loginStatus: STATUS.SUCCESS
      };
    case LOGIN_ACTION.LOGIN_FAILURE:
      return {
        ...state, 
        loginStatus: STATUS.ERROR
      }
    case LOGIN_ACTION.LOGIN_CLEAR: 
      return{
        ...state,
        data: null,
        loginStatus: STATUS.CLEAR
      }
    default: 
      return state;
  }
}