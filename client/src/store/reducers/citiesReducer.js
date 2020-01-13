import {
    REQUEST_CITIES,
    RECEIVE_CITIES
} from '../actions/citiesActions'

export default (
    state = {
        isFetching: true,
        cities: []
    },
    action
) => {
    switch (action.type) {

        case REQUEST_CITIES:
            return Object.assign({}, state, {
                isFetching: true,
            })

        case RECEIVE_CITIES:
            return Object.assign({}, state, {
                isFetching: false,
                cities: action.payload.cities,
            })

        default:
            return state
    }
}

