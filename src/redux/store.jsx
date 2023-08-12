import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducers from "./reducers/RootReducer";

const store = createStore(rootReducers, applyMiddleware(thunk, logger))

export default store;