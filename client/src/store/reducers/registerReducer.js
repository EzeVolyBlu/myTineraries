import {
    REFRESH_EMAIL,
    REFRESH_PASSWORD,
    COMPLETE_FIELDS,
    CLOSE_ALERT,
    USER_CREATE_SUCCESS,
    ERROR_EMAIL,
    ERROR_PASSWORD
} from '../actions/registerActions'

export default (
    state = {
        // isLogged: false,
        invalidEmail: false,
        invalidPassword: false,
        invalidName: false,
        avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg',
        alert: {
            visible: false,
            color: '',
            message: ''
        }
    },
    action
) => {
    switch (action.type) {

        case ERROR_EMAIL:
            return Object.assign({}, state, {
                alert: {
                    color: 'danger',
                    message: 'Email ' + action.payload.message,
                    visible: true
                },
                invalidEmail: true
            })

        case ERROR_PASSWORD:
            return Object.assign({}, state, {
                alert: {
                    color: 'danger',
                    message: 'Password ' + action.payload.message,
                    visible: true
                },
                invalidPassword: true
            })

        case USER_CREATE_SUCCESS:
            return Object.assign({}, state, {
                alert: {
                    visible: true,
                    color: 'primary',
                    message: 'User created successfuly'
                }

            })

        case REFRESH_EMAIL:
            return Object.assign({}, state, {
                invalidEmail: false,
                alert: {
                    visible: false
                }
            });

        case REFRESH_PASSWORD:
            return Object.assign({}, state, {
                invalidPassword: false,
                alert: {
                    visible: false
                }
            });

        case CLOSE_ALERT:
            return Object.assign({}, state, {
                alert: {
                    ...state.alert,
                    visible: false
                }
                // lastUpdated: action.receivedAt
            });

        case COMPLETE_FIELDS:
            return Object.assign({}, state, {
                alert: {
                    ...state.alert,
                    visible: true,
                    color: 'danger',
                    message: 'Complete all the fields to submit'
                },
                invalidEmail: action.payload.invalidEmail,
                invalidName: action.payload.invalidName,
                invalidPassword: action.payload.invalidPassword,

                // lastUpdated: action.receivedAt
            });

            default:
                return state
    }


}
