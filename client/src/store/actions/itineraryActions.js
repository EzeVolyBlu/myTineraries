// import 'babel-polyfill'
import axios from 'axios';

export const REQUEST_ITINERARIES = 'REQUEST_ITINERARIES'
export const RECEIVE_USER = 'RECEIVE_USER'
function requestItineraries() {
  return {
    type: REQUEST_ITINERARIES,
  }
}

export const RECEIVE_ITINERARIES = 'RECEIVE_ITINERARIES'
function receiveItineraries(res) {


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

export const RECEIVE_CITY_NAME = 'RECEIVE_CITY_NAME'
function receiveCityName(cityName) {
  return {
    type: RECEIVE_CITY_NAME,
    cityName
  }
}

const getCityName = (cityId, dispatch) => {

  axios.get(`http://localhost:5000/cities/${cityId}`)
    .then(function (response) {
      // handle success
      dispatch(receiveCityName(response.data.name))
  
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
    });

}



export default function fetchItineraries(cityId) {

  return function (dispatch) {

    getCityName(cityId, dispatch);

    dispatch(requestItineraries(cityId))

      axios.get(`http://localhost:5000/itineraries/${cityId}`)
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

