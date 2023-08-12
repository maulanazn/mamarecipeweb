import { combineReducers } from "redux";
import {loginReducer, registerReducer} from "./AuthReducer.js";
import {deleteRecipeReducer, getAllRecipeReducer, getRecipeReducer, postRecipeReducer, updateRecipeReducer} from './../../redux/reducers/RecipeReducer.js';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    recipes: getAllRecipeReducer,
    recipe: getRecipeReducer,
    post_recipe: postRecipeReducer,
    put_recipe: updateRecipeReducer,
    delete_recipe: deleteRecipeReducer
});

export default rootReducer;