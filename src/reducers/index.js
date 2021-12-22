// Brings together all other reducers (Auth reducer etc) - Meeting place for all reducers 
import { combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer'



export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    loading: loadingReducer
});