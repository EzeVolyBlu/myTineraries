import {
    INVALIDATE_REQ,
    REQUEST_CITIES,
    RECEIVE_USER
} from '../actions/usersActions'

export default function users(
    state = {
        users: []
    },
    action
) {
    switch (action.type) {

        
        case RECEIVE_USER:
            return Object.assign({}, state, {
                users: [...state.users, action.user],
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
