// import 'babel-polyfill'
import axios from 'axios';

export const REQUEST_ITINERARIES = 'REQUEST_ITINERARIES'
function requestItineraries() {
  return {
    type: REQUEST_ITINERARIES,
  }
}

export const RECEIVE_ITINERARIES = 'RECEIVE_ITINERARIES'
function receiveItineraries(res) {

    console.log('res',res)

  return {
    type: RECEIVE_ITINERARIES,
    itineraries: res.data
  }
}
export const INVALIDATE_REQ = 'INVALIDATE_REQ'
export function invalidateReq(req) {
  return {
    type: INVALIDATE_REQ,
    req
  }
}


export default function fetchItineraries(cityId) {

  return function (dispatch) {

    dispatch(requestItineraries(cityId))

    return axios.get(`http://localhost:5000/itineraries/${cityId}`)
      .then(function (response) {
        // handle success
        dispatch(receiveItineraries(response))

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
//   axios.get('http://localhost:5000/ITINERARIES/all')
//       .then(response => this.setState({
//           ITINERARIES: response.data,
//           isFetching: false,
//           filteredITINERARIES: response.data
//       }))
//       .catch(e => console.log(e));
// }

