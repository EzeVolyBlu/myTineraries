import axios from 'axios';

export const REQUEST_CITIES = 'REQUEST_CITIES'
export const RECEIVE_CITIES = 'RECEIVE_CITIES'

export const fetchCities = () => async dispatch => {

  dispatch({
    type: REQUEST_CITIES
  })

  try{
    const res = await axios.get('http://localhost:5000/cities/all');

    dispatch({
      type: RECEIVE_CITIES,
      payload: {
        cities: res.data
      }});

  }catch (error){
    console.log(error);
  }
}

