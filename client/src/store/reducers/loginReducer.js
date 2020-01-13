import {
    STORE_TOKEN,
    LOGIN_SUCCESS,
    GOOGLE_LOGIN_SUCCESS,
    ERROR_LOGIN
} from '../actions/loginActions';

import {
    CLOSE_ALERT, 
    COMPLETE_FIELDS
} from '../actions/registerActions'

export default (
    state = {
        isLogged: false,
        avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg',
        invalidEmail: false,
        invalidPassword: false,
        alert: {
            visible: false,
            color: '',
            message: ''
        }


        // success: false,
    },
    action
) => {
    switch (action.type) {

    
        case STORE_TOKEN:
            return Object.assign({}, state, {
                
            }) 
    
        case GOOGLE_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                
            })

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
                invalidPassword: action.payload.invalidPassword,
            });

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLogged: true,
                alert: {
                    color: 'primary',
                    message: 'Login succesful. Welcome...',
                    visible: true 
                },
            })

        case ERROR_LOGIN:
            return Object.assign({}, state, {
                alert: {
                    color: 'danger',
                    message: 'Authentication error',
                    visible: true 
                },
            })

        default:
            return state
    }


}
