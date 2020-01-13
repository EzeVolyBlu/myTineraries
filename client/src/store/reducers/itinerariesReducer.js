import {
    REQUEST_ITINERARIES,
    RECEIVE_ITINERARIES,
    RECEIVE_CITY_NAME,
} from '../actions/itinerariesActions'

export default (
    state = {
        isFetching: true,
        itineraries: [],
        cityName: '',
    },
    action
) => {
    switch (action.type) {
     
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
