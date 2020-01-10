import axios from 'axios';
// import CreateNewAccount from '../../Pages/CreateNewAccount';



export const REFRESH_EMAIL = 'REFRESH_EMAIL'
export const refreshEmail = () => (dispatch) => {
  dispatch({
    type: REFRESH_EMAIL
  })
}

export const REFRESH_PASSWORD = 'REFRESH_PASSWORD'
export const refreshPassword = () => (dispatch) => {
  dispatch({
    type: REFRESH_PASSWORD
  })
}

export const COMPLETE_FIELDS = 'COMPLETE_FIELDS'
export const completeFields = (state) => (dispatch) => {

  let invalidFields = {
    invalidName: false,
    invalidEmail: false,
    invalidPassword: false
  }

  if(state.name === ''){
    invalidFields = {
      ...invalidFields,
      invalidName: true
    }
  }

  if(state.email === ''){
    invalidFields = {
      ...invalidFields,
      invalidEmail: true
    }
  }

  if(state.password === ''){
    invalidFields = {
      ...invalidFields,
      invalidPassword: true
    }
  }

  dispatch({
    type: COMPLETE_FIELDS,
    payload: invalidFields
  })
}

export const CLOSE_ALERT = 'CLOSE_ALERT'
export const closeAlert = () => (dispatch) => {
  dispatch({
    type: CLOSE_ALERT
  })
}






export const ERROR_USER_EXISTS = 'ERROR_USER_EXISTS'
export const ERROR_EMAIL = 'ERROR_EMAIL'
export const ERROR_PASSWORD = 'ERROR_PASSWORD'
export const ERROR_CREATE_USER = 'ERROR_CREATE_USER'

export const submitAccount = userData => async dispatch => {

  //request if user exists
  const res = await axios.post('http://localhost:5000/users', userData)


  if (res.data.success) {

    dispatch({
      type: USER_CREATE_SUCCESS,
    })

  } else {

    res.data.errors.map(e => {
      switch(e.field){
        case 'email':
          dispatch({
            type: ERROR_EMAIL,
            payload: {
              message: e.msg
            }
          })

          break;

        case 'password':
          dispatch({
            type: ERROR_PASSWORD,
            payload: {
              message: e.msg
            }
          })

          break;

        default:
          return
      }
    })

    

  }

}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const ERROR_LOGIN = 'ERROR_LOGIN'
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN'
export const submitLogin = loginData => async dispatch => {

  //request if user exists
  const res = await axios.post('http://localhost:5000/users/login', loginData)

  console.log('res.data',res.data)


  const {username, avatar} = res.data;
  console.log(username, avatar)
  if(res.data.success){
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        username,
        avatar
      }
    })
  } else {
      dispatch({
        type: ERROR_LOGIN
      })
    }
}

export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS'
export const submitGoogleLogin = () => async dispatch => {

  console.log('2');

  //request if user exists
  const res = await axios.get('http://localhost:5000/users/auth/google')

  console.log('res.data',res.data);
  

 dispatch({
   type: GOOGLE_LOGIN_SUCCESS,
   payload: {
     success: true,
   }

 })
}



export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'

export const test = () => (dispatch) => {
  dispatch({
    type: CLOSE_ALERT
  })
}



// ME TENGO Q LLEVAR ESTO 

export default function getUsers(itineraries) {

  return function (dispatch) {

    // dispatch(requestCities())
    let usersNames = []
    itineraries.map(it => {

      axios.get(`http://localhost:5000/users/${it.userId}`)
        .then(function (response) {
          // handle success
          dispatch(receiveUser(response))
          console.log("response", response)
          usersNames.push(response)

        })
        .catch(function (error) {
          // handle error
          // dispatch(invalidateReq(error))

          console.log(error);
        })
        .finally(function () {
        });
    })
  }
}

export const RECEIVE_USER = 'RECEIVE_USER'
function receiveUser(res) {

  return {
    type: RECEIVE_USER,
    user: res.data
  }
}


export const INVALIDATE_REQ = 'INVALIDATE_REQ'
export function invalidateReq(error) {
  return {
    type: INVALIDATE_REQ,
    error
  }
}