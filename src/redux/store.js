import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/RootReducer.js";

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store;