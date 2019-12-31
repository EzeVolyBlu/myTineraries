// import 'babel-polyfill'
import axios from 'axios';

export const REQUEST_CITIES = 'REQUEST_CITIES'
function requestCities() {
  return {
    type: REQUEST_CITIES,
  }
}

export const RECEIVE_CITIES = 'RECEIVE_CITIES'
function receiveCities(res) {


  return {
    type: RECEIVE_CITIES,
    cities: res.data
  }
}
export const INVALIDATE_REQ = 'INVALIDATE_REQ'
export function invalidateReq(req) {
  return {
    type: INVALIDATE_REQ,
    req
  }
}


export default function fetchCities() {

  return function (dispatch) {

    dispatch(requestCities())

    return axios.get('http://localhost:5000/cities/all')
      .then(function (response) {
        // handle success
        dispatch(receiveCities(response))

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
      });





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

