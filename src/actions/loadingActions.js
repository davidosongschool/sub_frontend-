import {
DATA_LOADING,
DATA_LOADING_COMPLETE
    } from '../actions/types'



export const toggleLoading = () => dispatch => {
    console.log("Loading happened")
    dispatch({
        type: DATA_LOADING,
        });
}


export const loadingComplete = () => dispatch => {
    console.log("Loading completed")
        dispatch({
        type: DATA_LOADING_COMPLETE,
        });

}

