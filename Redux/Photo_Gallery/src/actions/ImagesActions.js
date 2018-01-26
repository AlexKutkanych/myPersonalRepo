import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILED,
  PIXABAY_API_IMAGES } from '../constants/Page';
import axios from 'axios';

export const getImages = (imageType = 'all', request, perPage = 40) => dispatch => {
  dispatch({
    type: GET_PHOTOS_REQUEST,
    data: []
  });

  axios.get(`${PIXABAY_API_IMAGES}&image_type=${imageType}&q=${request}&per_page=${perPage}&pretty=true`)
    .then(res => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        data: res.data.hits
      })
    })
    .catch(err => {
      dispatch({
        type: GET_PHOTOS_FAILED,
        data: [],
      })
    })
}
