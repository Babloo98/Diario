import { combineReducers } from "redux";
import formReducer from "./form.reducer";
// import yogaReducer from "./yogaTable.reducer";

const reducer = combineReducers({
  formReducer,
//   yogaReducer
})

export default reducer;