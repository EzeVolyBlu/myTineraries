import {
    RECEIVE_USER,
    USER_CREATE_SUCCESS,
    CLOSE_ALERT,
    REFRESH_EMAIL,
    REFRESH_PASSWORD,
    COMPLETE_FIELDS,
    ERROR_EMAIL,
    ERROR_PASSWORD,
    LOGIN_SUCCESS,
    ERROR_LOGIN,
    GOOGLE_LOGIN_SUCCESS
} from '../actions/usersActions'

export default function users(
    state = {
        isLogged: false,
        users: [],
        invalidEmail: false,
        invalidPassword: false,
        invalidName: false,
        avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg',
        alert: {
            visible: false,
            color: '',
            message: ''
        }


        // success: false,
    },
    action
) {
    switch (action.type) {

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLogged: true,
                alert: {
                    color: 'primary',
                    message: 'Login succesful. Welcome ' + action.payload.username,
                    visible: true 
                },
                avatar: action.payload.avatar
            })

        case GOOGLE_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                
            })

        case ERROR_LOGIN:
            return Object.assign({}, state, {
                alert: {
                    color: 'danger',
                    message: 'Authentication error',
                    visible: true 
                },
            })


        case RECEIVE_USER:
            return Object.assign({}, state, {
                users: [...state.users, action.user],
                // lastUpdated: action.receivedAt
            })

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
