import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import registerReducer from "./register.reducer";

const reducer = combineReducers({
  loginReducer,
  registerReducer
})

export default reducer;