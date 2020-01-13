import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import usersReducer from './usersReducer';
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'


const rootReducer = combineReducers(
    {
        citiesReducer,
        itinerariesReducer,
        usersReducer,
        loginReducer,
        registerReducer

    }
);

export default rootReducer;