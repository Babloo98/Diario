import { FORM_ACTION, STATUS } from "../constant";

const initState = {
  data: [],
  formStatus: null
}

export default function formReducer(state = initState, action) {
  // console.log('action payload', action.payload);
  switch(action.type){
    case FORM_ACTION.FORM_START:
      return{ 
        ...state, 
        formStatus: STATUS.LOADING
      };
    case FORM_ACTION.FORM_SUCCESS:
      return {
        ...state,
        data: action.payload,
        formStatus: STATUS.SUCCESS
      };
    case FORM_ACTION.FORM_FAILURE:
      return {
        ...state, 
        formStatus: STATUS.ERROR
      }
    case FORM_ACTION.FORM_CLEAR: 
      return{
        ...state,
        data: null,
        formStatus: STATUS.CLEAR
      }
    default: 
      return state;
  }
}