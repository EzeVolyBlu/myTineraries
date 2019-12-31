import {
    INVALIDATE_REQ,
    REQUEST_CITIES,
    RECEIVE_CITIES
} from '../actions/cityActions'

export default function cities(
    state = {
        isFetching: true,
        didInvalidate: false,
        cities: []
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_REQ:
            return Object.assign({}, state, {
                didInvalidate: true
            })

        case REQUEST_CITIES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case RECEIVE_CITIES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                cities: action.cities,
                // lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}


// export function citiesByReq(state = {}, action) {
//     switch (action.type) {
//         case INVALIDATE_REQ:
//         case RECEIVE_CITIES:
//         case REQUEST_CITIES:
//             return Object.assign({}, state, {
//                 [action.req]: posts(state[action.req], action)
//             })
//         default:
//             return state
//     }
// }
