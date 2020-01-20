import {
    TOKEN_STORED,
    LOGIN_SUCCESS,
    ERROR_LOGIN,
    LOAD_USER,
    NOT_LOGGED,
    FETCHING,
    UNAUTHORIZED,
    AUTHORIZED,
    STORE_TOKEN
} from '../actions/loginActions';

import {
    CLOSE_ALERT, 
    COMPLETE_FIELDS
} from '../actions/registerActions'

export default (
    state = {
        token: '',
        isLogged: false,
        user:{
            avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg',
            name: ''
        },
        invalidEmail: false,
        invalidPassword: false,
        alert: {
            visible: false,
            color: '',
            message: ''
        },
        blackListTokens: [],
        fetching: true,
        authorized: false


        // success: false,
    },
    action
) => {
    switch (action.type) {

        case STORE_TOKEN:
            console.log('storetok');
            
            return Object.assign({}, state, {
                isLogged: true
            }) ;

        case FETCHING:

            return Object.assign({}, state, {
                fetching: true
            }) ;


        case UNAUTHORIZED:

            return Object.assign({}, state, {
                fetching: false,
                isLogged: false
            }) ;

        case AUTHORIZED:

        console.log('q mierda pasa');
        
            return Object.assign({}, state, {
                fetching: false,
                isLogged: false,
                authorized: true

            }) ;


        case NOT_LOGGED:

            return Object.assign({}, state, {
                isLogged: false,
                token:'',
                fetching: false,
                user:{
                    avatar: 'https://image.flaticon.com/icons/svg/747/747376.svg',
                    name: ''
                },
                // fetching: false,
                blackListTokens:[
                    ...state.blackListTokens,
                    action.payload.token
                ]
                // user: {
                //     avatar: action.payload.user.avatar,
                //     name: action.payload.user.name,
                //     userName: action.payload.user.name
                // }
            }) ;

        case LOAD_USER:
            return Object.assign({}, state, {
                isLogged: true,
                user: {
                    avatar: action.payload.user.avatar,
                    name: action.payload.user.name,
                },
                token: action.payload.token
            }) 
    
        case TOKEN_STORED:
            return Object.assign({}, state, {
                isLogged: true
            }) 
    
        // case GOOGLE_LOGIN_SUCCESS:
        //     return Object.assign({}, state, {
                
        //     })

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
                token: action.payload.token,
                // alert: {
                //     color: 'primary',
                //     message: 'Login succesful. Welcome...',
                //     visible: true 
                // },
                user: action.payload.user
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
