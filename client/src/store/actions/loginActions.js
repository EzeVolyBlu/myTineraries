import axios from 'axios';

export const STORE_TOKEN = 'STORE_TOKEN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const ERROR_LOGIN = 'ERROR_LOGIN'
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS'

const storeToken = token => dispatch => {

    window.localStorage.setItem('token', token);
    dispatch({
        type: STORE_TOKEN,
        payload: {
            token
        }
    })
}

export const submitLogin = loginData => async dispatch => {

    //request if user exists
    const res = await axios.post('http://localhost:5000/users/login', loginData)

    if (res.data.success) {
        dispatch({
            type: LOGIN_SUCCESS,
        })

        dispatch(storeToken(res.data.token))
        
    } else {
        dispatch({
            type: ERROR_LOGIN
        })
    }
}

export const submitGoogleLogin = () => async dispatch => {

    //request if user exists
    try{
        const aver = await axios.get('http://localhost:5000/users/auth/google')
        console.log('aver',aver);
        
    }catch(error){
        console.log(error)
    }

    dispatch({
        type: GOOGLE_LOGIN_SUCCESS,
        payload: {
            success: true,
        }

        

    })
}
