import axios from 'axios';


export const AUTHORIZED = 'AUTHORIZED'
export const UNAUTHORIZED = 'UNAUTHORIZED'
export const FETCHING = 'FETCHING'
export const TOKEN_STORED = 'TOKEN_STORED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const ERROR_LOGIN = 'ERROR_LOGIN'
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS'
export const NOT_LOGGED = 'NOT_LOGGED'
export const LOAD_USER = 'LOAD_USER'
export const STORE_TOKEN = 'STORE_TOKEN'



export const validating = token => async dispatch => {

        
    let success = false;
    let access = false;

    //check blacklist token
    try {
        const res = await axios.get(`http://localhost:5000/users/token/${token}`)
        access = res.data.access
    }catch(error){
        console.log(error)
    }

    if(access){

        //validate jwt token and get user information
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

        }catch(error){
            console.log(error)
        }
    }


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


const storeToken = token => dispatch =>
{
    dispatch({
        type: STORE_TOKEN
    })
}

export const checkToken = token => async dispatch => {

    dispatch({
        type: FETCHING
    })

    let blackTokenExist = true;
    //check blacklist token
    try {
        const res = await axios.get(`http://localhost:5000/users/token/${token}`)
        blackTokenExist = res.data.blackTokenExist
    }catch(error){
        console.log(error)
    }
    
    if(blackTokenExist){
        
        dispatch({
            type: UNAUTHORIZED
        })
    }else {


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
            console.log('res',res);

            window.localStorage.setItem('token',token)

            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token,
                    user: res.data.user
                }
            })
            

        }catch(error){
            console.log(error)
        }




        
    }
}



export const logout = () => async dispatch => {
    const token = window.localStorage.getItem('token')

    await axios.post(`http://localhost:5000/users/token/${token}`)

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
