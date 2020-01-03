// import 'babel-polyfill'
import axios from 'axios';

export const REQUEST_CITIES = 'REQUEST_CITIES'
function requestCities() {
  return {
    type: REQUEST_CITIES,
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




export const submitAccount = userData => dispatch => {

  console.log('userData', userData)
  // dispatch(postUser(userData))
  axios.post('http://localhost:5000/users', 
    userData
  ).then(function (response) {
        // handle success
        console.log("response", response)

      })
      .catch(function (error) {
        // handle error
        // dispatch(invalidateReq(error))

        console.log(error);
      })
      .finally(function () {
      });


}

export const POST_USER = 'POST_USER'
export const postUser = error => {
  return {
    type: INVALIDATE_REQ,
    error
  }
}


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


    
    /*
    return 
*/




  }
}



// fetchQuotes = () => {
//   this.setState({ ...this.state, isFetching: true })
//   axios.get('http://localhost:5000/cities/all')
//       .then(response => this.setState({
//           cities: response.data,
//           isFetching: false,
//           filteredCities: response.data
//       }))
//       .catch(e => console.log(e));
// }

