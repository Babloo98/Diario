import { REG_ACTION, STATUS } from "../constant";

const initState = {
  data: [],
  regStatus: null
}

export default function registerReducer(state = initState, action) {
  switch(action.type){
    case REG_ACTION.REG_START:
      return{ 
        ...state, 
        regStatus: STATUS.LOADING
      };
    case REG_ACTION.REG_SUCCESS:
      return {
        ...state,
        data: action.reg_data,
        regStatus: STATUS.SUCCESS
      };
    case REG_ACTION.REG_FAILURE:
      return {
        ...state, 
        regStatus: STATUS.ERROR
      }
    case REG_ACTION.REG_CLEAR: 
      return{
        ...state,
        data: null,
        regStatus: STATUS.CLEAR
      }
    default: 
      return state;
  }
}