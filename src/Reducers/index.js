import { combineReducers } from "redux";
import loginReducer from "./login.reducer";

const reducer = combineReducers({
  loginReducer,
})

export default reducer;