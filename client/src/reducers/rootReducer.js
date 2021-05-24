import { combineReducers } from "redux";
import postReducer from './postReducer';

// console.log(postReducer());


const RootReducer=combineReducers({
    postReducer,
})


export default RootReducer;