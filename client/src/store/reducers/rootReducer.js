import { combineReducers } from "redux";
import cities from "./citiesReducer";

const rootReducer = combineReducers(
    {
        citiesReducer: cities
    }
);

export default rootReducer;