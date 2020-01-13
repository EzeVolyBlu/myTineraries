import axios from 'axios';

export const REFRESH_EMAIL = 'REFRESH_EMAIL'
export const REFRESH_PASSWORD = 'REFRESH_PASSWORD'
export const COMPLETE_FIELDS = 'COMPLETE_FIELDS'
export const CLOSE_ALERT = 'CLOSE_ALERT'
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
export const ERROR_EMAIL = 'ERROR_EMAIL'
export const ERROR_PASSWORD = 'ERROR_PASSWORD'

export const refreshEmail = () => dispatch => {
    dispatch({
        type: REFRESH_EMAIL
    })
}

export const refreshPassword = () => dispatch => {
    dispatch({
        type: REFRESH_PASSWORD
    })
}

export const completeFields = state => dispatch => {

    let invalidFields = {
        invalidName: false,
        invalidEmail: false,
        invalidPassword: false
    }

    if (state.name === '') {
        invalidFields = {
            ...invalidFields,
            invalidName: true
        }
    }

    if (state.email === '') {
        invalidFields = {
            ...invalidFields,
            invalidEmail: true
        }
    }

    if (state.password === '') {
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

export const closeAlert = () => dispatch => {
    dispatch({
        type: CLOSE_ALERT
    })
}

export const submitAccount = userData => async dispatch => {

    //request if user exists
    const res = await axios.post('http://localhost:5000/users', userData)


    if (res.data.success) {

        dispatch({
            type: USER_CREATE_SUCCESS,
        })

    } else {

        res.data.errors.map(e => {
            switch (e.field) {
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
