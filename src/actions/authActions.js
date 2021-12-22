import axios from 'axios';
import { returnErrors } from './errorActions';
import { Redirect } from 'react-router';
import { toggleLoading, loadingComplete } from './loadingActions';


import {
    USER_LOADING , 
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    VERIFY_EMAIL,
    VERIFY_EMAIL_COMPLETE,
    } from '../actions/types'



    

// Check token and load user - hits '/auth/user'
export const loadUser = () => (dispatch, getState) => {

    let email = null;
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
     
    // Once we get the user, check that the account is verified     
    const body = 
    {
        email: res.data.email
    
    }

    const config = {
    headers: {
        'Content-Type': 'application/json',
    }
    }
    axios.post("http://127.0.0.1:8000/verification/check_email_verified/", body, config)
    .then(res => {
        if (!res.data) {
            dispatch({
                type: VERIFY_EMAIL
            });
        } else {
            dispatch({
                type: VERIFY_EMAIL_COMPLETE
            });
        }
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
export const registerUser = (email1, password1) => (dispatch) =>{
    console.log("Reg In");
    const body = 
        {
            email: email1,
            password1: password1,
            password2: password1
        }

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    axios.post('http://127.0.0.1:8000/auth/registration/', body, config)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
            })
          window.location.replace("http://127.0.0.1:3000/");

    })
    .catch(e => {
        console.log(e);
        dispatch(returnErrors(e.response));
        dispatch({
            type: REGISTER_FAIL
        });
    });
    

};

// Logout User 
export const logoutUser = () => dispatch =>{
    dispatch({
            type: LOGOUT_SUCCESS
        });
    <Redirect to="/login" />  
};



// Login User
export const loginUser = (email, password) => (dispatch, getState) =>{

    dispatch(toggleLoading());
    const body = 
        {
            email: email,
            password: password,
        }

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    axios.post('http://127.0.0.1:8000/auth/login/', body, config)
    .then(res => {
       
        dispatch(loadingComplete());
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
            });
        dispatch({
            type: CLEAR_ERRORS
            });
            
    axios.get('http://127.0.0.1:8000/auth/user/',tokenConfig(getState) )
    .then(res => { 
        dispatch({
        type: USER_LOADED,
        payload: res.data
        });
    })

        // Make sure account is verified before allowing the user to continue        
        axios.post("http://127.0.0.1:8000/verification/check_email_verified/", body, config)
        .then(res => {
            if (!res.data) {
                dispatch({
                    type: VERIFY_EMAIL
                });
            } else {
                dispatch({
                    type: VERIFY_EMAIL_COMPLETE
                });
            }
        });
            })
    .catch(e => {
        console.log(e);
        dispatch(loadingComplete());
        dispatch({
            type: LOGIN_FAIL
        });
        console.log(e);

    });
    

};



export const recheckEmail = (email) => dispatch =>{


    const body = 
        {
            email: email,
        }

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    // Make sure account is verified before allowing the user to continue        
    axios.post("http://127.0.0.1:8000/verification/check_email_verified/", body, config)
    .then(res => {
        if (!res.data) {
            console.log("Need to verify email")
            dispatch({
                type: VERIFY_EMAIL
            });
        } else {
            dispatch({
                type: VERIFY_EMAIL_COMPLETE
            });
        }
    });


}



export { tokenConfig }

