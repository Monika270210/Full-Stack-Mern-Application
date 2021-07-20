import { combineReducers } from "redux";
import postReducer from './postReducer';
import AuthReducer from './authReducer';

// console.log(postReducer());

const RootReducer = combineReducers({
    postReducer,
    AuthReducer
})

export default RootReducer;