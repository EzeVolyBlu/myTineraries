import axios from 'axios';

export const RECEIVE_USER = 'RECEIVE_USER'

export const REQUEST_ITINERARIES = 'REQUEST_ITINERARIES'
export const RECEIVE_ITINERARIES = 'RECEIVE_ITINERARIES'
export const RECEIVE_CITY_NAME = 'RECEIVE_CITY_NAME'

export const fetchItineraries = cityId => async dispatch => {

  //get city name
  try {

    const res = await axios.get(`http://localhost:5000/cities/${cityId}`);

    dispatch({
      type: RECEIVE_CITY_NAME,
      payload: {
        cityName: res.data.name
      }
    });

  } catch (error) {
    console.log(error)
  };

  //request itineraries

  try{

    dispatch({
      type: REQUEST_ITINERARIES,
    })

    const res = await axios.get(`http://localhost:5000/itineraries/${cityId}`);

    dispatch({
      type: RECEIVE_ITINERARIES,
      payload: {
        itineraries: res.data
      }
    })


  }catch(error){
    console.log(error)
  }

}


