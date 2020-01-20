import axios from 'axios';

export const RECEIVE_USER = 'RECEIVE_USER'

export const REQUEST_ITINERARIES = 'REQUEST_ITINERARIES'
export const RECEIVE_ITINERARIES = 'RECEIVE_ITINERARIES'
export const RECEIVE_CITY_NAME = 'RECEIVE_CITY_NAME'
export const IS_FAV = 'IS_FAV'
export const IS_NOT_FAV = 'IS_NOT_FAV'

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

  try {

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


  } catch (error) {
    console.log(error)
  }

}


export const checkFav = (itId, userFavs) => dispatch => {

  // let match = false;
  const favIt = userFavs.map(
    it => {
      if (itId === it)
        return it;
    }
  )



  if (favIt.length > 0) {

    dispatch({
      type: IS_FAV
    })
  } else {

    dispatch({
      type: IS_NOT_FAV
    })
  }


}

export const submitFav = (itId, isFav, token) => async dispatch => {

  if (isFav) {
    //delete fav

    try {

      await axios.delete('http://localhost:5000/itineraries/favourites', {
        headers: {
          'Authorization': `bearer ${token}`,
          // 'Accept': 'application/json',
          'Content-Type': 'application/json',

          favourite: itId
        }
      })

    } catch (error) {
      console.log(error)
    }


  } else {
    //append fav

    try {

      await axios({
        method: 'POST',
        url: 'http://localhost:5000/itineraries/favourites', 
        headers: {
          'Authorization': `bearer ${token}`,
          // 'Accept': 'application/json',
          'Content-Type': 'application/json',

          favourite: itId
        }
      });


    } catch (error) {
      console.log(error)
    }


  }

}
























export const getItinerary = itineraryId => async dispatch => {

  dispatch({
    type: REQUEST_ITINERARIES,
  })

  try {

    const res = await axios.get(`http://localhost:5000/itineraries`, {
      headers: { itineraryId }
    });

    console.log('res', res);

  } catch (error) {
    console.log(error);

  }

}