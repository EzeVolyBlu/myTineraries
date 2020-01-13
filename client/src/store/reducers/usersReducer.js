import {
    RECEIVE_USER
} from '../actions/usersActions'

export default function users(
    state = {
        users: [],
    },
    action
) {
    switch (action.type) {

        case RECEIVE_USER:
            return Object.assign({}, state, {
                users: [...state.users, action.user],
            })

        default:
            return state
    }
}
