import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import commentsReducer from './commentsReducer'
import itinerariesReducer from "./itinerariesReducer";
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import usersReducer from './usersReducer';


const rootReducer = combineReducers(
    {
        citiesReducer,
        itinerariesReducer,
        usersReducer,
        loginReducer,
        registerReducer,
        commentsReducer

    }
);

export default rootReducer;