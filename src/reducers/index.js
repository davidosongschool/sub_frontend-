// Brings together all other reducers (Auth reducer etc) - Meeting place for all reducers 
import { combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    error: errorReducer
});