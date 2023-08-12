import axios from "axios";
import {URL} from './../../pages/config/URL.js';
import headers from './../../pages/config/Header.js';

export const getAllRecipeAction = () => 
    async (dispatch) => {
        try {
            dispatch({type: 'GET_RECIPES_PENDING'})
            const result = await axios.get(`${URL}/recipe/lists`)
            dispatch({payload: result.data.data, type: 'GET_RECIPES_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'GET_RECIPES_FAILED'})
            console.error(error.message);
        }
    }


export const getRecipeAction = (id) => 
    async (dispatch) => {
        try {
            dispatch({type: 'GET_RECIPE_PENDING'})
            const result = await axios.get(`${URL}/recipe/${id}/detail`, {headers})
            dispatch({payload: result.data.data, type: 'GET_RECIPE_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'GET_RECIPE_FAILED'})
            console.error(error.message);
        }
    }

export const searchRecipeAction = (data) => 
    async (dispatch) => {
        try {
            dispatch({type: 'SEARCH_RECIPE_PENDING'})
            const result = await axios.get(`${URL}/recipe?search=${data}`)
            dispatch({payload: result.data.data, type: 'SEARCH_RECIPE_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'SEARCH_RECIPE_FAILED'})
            console.error(error.message);
        }
    }

export const postRecipeAction = (data, navigate) => 
    async (dispatch) => {
        try {
            dispatch({type: 'POST_RECIPE_PENDING'})
            const result = await axios.post(`${URL}/recipe`, data, {headers})
            navigate('/account')
            dispatch({payload: result.data.data, type: 'POST_RECIPE_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'POST_RECIPE_FAILED'})
            console.error(error.message);
        }
    }

export const updateRecipeAction = (data, id, navigate) => 
    async (dispatch) => {
        try {
            dispatch({type: 'UPDATE_RECIPE_PENDING'})
            const result = await axios.put(`${URL}/recipe/${id}`, data, {headers})
            navigate('/account')
            dispatch({payload: result.data.data, type: 'UPDATE_RECIPE_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'UPDATE_RECIPE_FAILED'})
            console.error(error.message);
        }
    }

export const deleteRecipeAction = (id, navigate) => 
    async (dispatch) => {
        try {
            dispatch({type: 'DELETE_RECIPE_PENDING'})
            const result = await axios.delete(`${URL}/recipe/${id}`, {headers})
            navigate('/account')
            dispatch({payload: result.data.data, type: 'DELETE_RECIPE_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'DELETE_RECIPE_FAILED'})
            console.error(error.message);
        }
    }