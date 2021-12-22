import {
    DATA_LOADING,
    DATA_LOADING_COMPLETE
    }from '../actions/types'
    
    
    
const initialState = {
        loading: false
     }
     
const Fnc = (state = initialState, action) => {
    switch(action.type){
    case DATA_LOADING:
        return {
            ...state,
            loading: true,
        };
    case DATA_LOADING_COMPLETE:
        return {
            ...state, 
            loading: false,
        };
    default:
        return {
            ...state,
            loading: false
        }
}

};

export default Fnc;