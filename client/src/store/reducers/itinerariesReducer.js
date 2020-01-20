import {
    REQUEST_ITINERARIES,
    RECEIVE_ITINERARIES,
    RECEIVE_CITY_NAME,
    IS_FAV,
    IS_NOT_FAV
} from '../actions/itinerariesActions'

export default (
    state = {
        isFetching: true,
        itineraries: [],
        cityName: '',
        isFav: false
    },
    action
) => {
    switch (action.type) {
     
        case IS_NOT_FAV:
            return Object.assign({}, state, {
                isFav: false,
            })
     
     
        case IS_FAV:
            return Object.assign({}, state, {
                isFav: true,
            })
     
        case REQUEST_ITINERARIES:
            return Object.assign({}, state, {
                isFetching: true,
            })

        case RECEIVE_ITINERARIES:
            return Object.assign({}, state, {
                isFetching: false,
                itineraries: action.payload.itineraries,
            })

        case RECEIVE_CITY_NAME:
            return Object.assign({}, state, {
                cityName: action.payload.cityName
            })
        
        default:
            return state
    }
}
