import axios from 'axios';

export const TOKEN_STORED = 'TOKEN_STORED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const ERROR_LOGIN = 'ERROR_LOGIN'
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS'
export const NOT_LOGGED = 'NOT_LOGGED'
export const LOAD_USER = 'LOAD_USER'


export const checkToken = token => async dispatch => {
    // const token = window.localStorage.getItem('token');
    // try {

    //     const resToken = await axios.get(`http://localhost:5000/users/token/${token}`)


    // }catch(error){
    //     console.log(error)
    // }



    try{

        const res = await axios.get(
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




        

        if(res.data.success){
            window.localStorage.setItem('token', token);
        }
        


        dispatch({
            type: LOAD_USER,
            payload: {
                user: res.data.user,
                token
            }
        })


    } catch (error) {
        console.log(error)
    }
  
}


export const logout = () => dispatch => {
    const token = window.localStorage.getItem('token')
    window.localStorage.removeItem('token');
    // window.location.reload(true);
    dispatch({
        type: NOT_LOGGED,
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


    } else {
        dispatch({
            type: ERROR_LOGIN
        })
    }
}
