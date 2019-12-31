import {
    INVALIDATE_REQ,
    REQUEST_ITINERARIES,
    RECEIVE_ITINERARIES
} from '../actions/itineraryActions'

export default function itineraries(
    state = {
        isFetching: true,
        didInvalidate: false,
        itineraries: []
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_REQ:
            return Object.assign({}, state, {
                didInvalidate: true
            })

        case REQUEST_ITINERARIES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case RECEIVE_ITINERARIES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                itineraries: action.itineraries,
                // lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}


// export function ITINERARIESByReq(state = {}, action) {
//     switch (action.type) {
//         case INVALIDATE_REQ:
//         case RECEIVE_ITINERARIES:
//         case REQUEST_ITINERARIES:
//             return Object.assign({}, state, {
//                 [action.req]: posts(state[action.req], action)
//             })
//         default:
//             return state
//     }
// }
