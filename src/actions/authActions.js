import axios from 'axios';
import { returnErrors } from './errorActions';

import {
    USER_LOADING , 
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    } from '../actions/types'


// Check token and load user - hits '/auth/user'
export const loadUser = () => (dispatch, getState) => {
    // User loading 
    dispatch( {
        type: USER_LOADING
        } 
        );

    // Get User
    axios.get('http://127.0.0.1:8000/auth/user/', tokenConfig(getState))
    .then(res => { 
        dispatch({
        type: USER_LOADED,
        payload: res.data
        });
    })
    .catch(e => {
        dispatch({
            type: AUTH_ERROR
        });
    })
    

};


// Token config function to pass token in any request needed
const tokenConfig = (getState) => {
    // Get token from localStorage
    const token = getState().auth.key;
    const config  = {
        headers: {
        }
    }

    // If there is a token, add it to headers    
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;

}


// Register User
export const registerUser = (username1, email1, password1) => (dispatch) =>{
    console.log("Reg In");
    const body = 
        {
            username: username1,
            email: email1,
            password1: password1,
            password2: password1
        }

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    axios.post('http://127.0.0.1:8000/auth/register/', body, config)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
            })
    })
    .catch(e => {
        dispatch(returnErrors(e.response.data, e.response.status));
        dispatch({
            type: REGISTER_FAIL
        });
    });
    

};


// Login User
export const loginUser = (username, password) => (dispatch) =>{
    console.log("Logged In");
    const body = 
        {
            username: username,
            password: password,
        }

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    axios.post('http://127.0.0.1:8000/auth/login/', body, config)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
            });
            // After logging in successfully, dispatch load user 
            dispatch( {
                type: CLEAR_ERRORS
                } 
                );
    })
    .catch(e => {
        dispatch({
            type: LOGIN_FAIL
        });
    });
    

};



export { tokenConfig }