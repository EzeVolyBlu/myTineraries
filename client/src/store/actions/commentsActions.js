export const FETCH_USER_NAME = 'FETCH_USER_NAME';
export const fetchUserName = id => dispatch => {
    dispatch({
        type: FETCH_USER_NAME,
        payload: {
            comment: {
                id,
                comment: 'test comment'
            }
        }
    })
}