import { combineReducers } from "redux";
import {loginReducer, registerReducer} from "./AuthReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
})

export default rootReducer;