import axios from 'axios';

export const RECEIVE_USER = 'RECEIVE_USER'

export const getUsers = itineraries => dispatch => {

  try{

    let usersNames = []
    itineraries.map(async it => {
  
    const res = await axios.get(`http://localhost:5000/users/${it.userId}`);
  
      dispatch({
        type: RECEIVE_USER,
        payload: {
          user: res.data
        }
      })
      usersNames.push(res)
  
    });

  }catch(error){
    console.log(error)
  }
}


