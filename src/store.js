import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducers";
import { createLogger } from "redux-logger";

const middleware = [];
middleware.push(thunk);

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== "production"
});
middleware.push(loggerMiddleware);
const store = createStore(reducer, compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;