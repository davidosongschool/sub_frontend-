// Send down certain state depending on what the action does 

// For auth, this is where you would save the token etc 

import {
USER_LOADING , 
USER_LOADED,
AUTH_ERROR,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGOUT_SUCCESS,
REGISTER_SUCCESS,
REGISTER_FAIL,
GET_ERRORS,
CLEAR_ERRORS
}from '../actions/types'

let key;

if(localStorage.getItem('token')) {
    key = localStorage.getItem('token')
} else {
    key = null;
}

const initialState = {
    key: key,
    isAuthenticated: null,
    isLoading: false, 
    user: null,
    apiCall: false,
}

const Fnc = (state = initialState, action) => {
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADED:
            return {
                ...state, 
                isLoading: false,
                isAuthenticated: true,
                apiCall: true,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS: 
            localStorage.setItem('token', action.payload.key);   
            return {
                ...state, 
                ...action.payload,
                isLoading: false,
                isAuthenticated: true,
                apiCall: true,
            };    
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
           localStorage.removeItem('token')
            return {
                ...state,
                key: null,
                user: null,
                isAuthenticated: false, 
                isLoading: false,
                apiCall: true,
            }           
        default:
            return state;
    }
}

export default Fnc;