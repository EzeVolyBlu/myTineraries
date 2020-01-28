import {
    FETCH_USER_NAME 
} from '../actions/commentsActions'

export default (
    state = {
        comments: []
    }, action
) => {

    switch(action.type){

        case FETCH_USER_NAME:
            return {
                ...state,
                comments: [
                    ...state.comments,
                    action.payload.comment
                ]
            }

        default:
            return state;
    }
}