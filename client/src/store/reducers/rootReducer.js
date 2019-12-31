import { combineReducers } from "redux";
import cities from "./citiesReducer";
import itineraries from "./itinerariesReducer";


const rootReducer = combineReducers(
    {
        citiesReducer: cities,
        itinerariesReducer: itineraries
    }
);

export default rootReducer;