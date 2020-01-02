import { combineReducers } from "redux";
import cities from "./citiesReducer";
import itineraries from "./itinerariesReducer";
import users from './usersReducer';


const rootReducer = combineReducers(
    {
        citiesReducer: cities,
        itinerariesReducer: itineraries,
        usersReducer: users
    }
);

export default rootReducer;