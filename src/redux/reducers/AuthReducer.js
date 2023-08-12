import initialState from './../../pages/config/InitialState.js';

export const loginReducer = (state = initialState, action) => {
    if (action.type === 'LOGIN_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'LOGIN_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'LOGIN_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const registerReducer = (state = initialState, action) => {
    if (action.type === 'REGISTER_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'REGISTER_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'REGISTER_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}