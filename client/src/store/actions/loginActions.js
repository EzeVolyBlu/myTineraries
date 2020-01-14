import axios from 'axios';

export const TOKEN_STORED = 'TOKEN_STORED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const ERROR_LOGIN = 'ERROR_LOGIN'
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS'
export const NOT_LOGGED = 'NOT_LOGGED'
export const LOAD_USER = 'LOAD_USER'


export const checkToken = (token) => async dispatch => {
    // const token = window.localStorage.getItem('token');
    try {
        const user = await axios.get(
            `http://localhost:5000/users/`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `bearer ${token}`,
                    // 'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )

        console.log('user',user);
        


        dispatch({
            type: LOAD_USER,
            payload: {
                user: user.data
            }
        })


    } catch (error) {
        console.log(error)
    }







    //asdasdasd
    if (token) {

        dispatch(loadUser(token))

    } else {
        dispatch({
            type: NOT_LOGGED
        })
    }
}


export const logout = () => dispatch => {
    window.localStorage.removeItem('token')
    dispatch({
        type: NOT_LOGGED
    })
}


const loadUser = token => async dispatch => {

    try {
        const user = await axios.get(
            `http://localhost:5000/users/`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `bearer ${token}`,
                    // 'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )


        dispatch({
            type: LOAD_USER,
            payload: {
                user: user.data
            }
        })


    } catch (error) {
        console.log(error)
    }
}




export const storeToken = token => dispatch => {

    console.log('store token');
    
    window.localStorage.setItem('token', token);
    dispatch({
        type: TOKEN_STORED,
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
            payload: {
                token: res.data.token
            }
        })

        // dispatch(storeToken(res.data.token))





    } else {
        dispatch({
            type: ERROR_LOGIN
        })
    }
}

export const submitGoogleLogin = () => async dispatch => {

    //request if user exists
    try {
        await axios.get('http://localhost:5000/users/auth/google')
    } catch (error) {
        console.log(error)
    }

    dispatch({
        type: GOOGLE_LOGIN_SUCCESS,
        payload: {
            success: true,
        }



    })
}
