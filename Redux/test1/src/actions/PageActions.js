import { GET_PHOTOS_REQUEST, PIXABAY_API } from '../constants/Page';
import axios from 'axios';

export const getPhotos = (year, request) => dispatch => {
  return axios.get(`${PIXABAY_API}&q=${request}`)
    .then(res => {
      dispatch({
        type: GET_PHOTOS_REQUEST,
        payload: year,
        photos: res.data.hits
      })
    })

  // setTimeout(() => {
  //   dispatch({
  //     type: GET_PHOTOS_SUCCESS,
  //     payload: year,
  //     photos: []
  //   })
  // }, 1000)
}
