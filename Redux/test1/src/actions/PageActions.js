import { GET_ALL_PHOTOS_REQUEST, GET_PHOTOS_FAILED, PIXABAY_API } from '../constants/Page';
import axios from 'axios';

export const getPhotos = (imageType = 'all', request) => dispatch => {
  return axios.get(`${PIXABAY_API}&image_type=${imageType}&q=${request}`)
    .then(res => {
      dispatch({
        type: GET_ALL_PHOTOS_REQUEST,
        photos: res.data.hits,
        imageType,
      })
    })
    .catch(err => {
      dispatch({
        type: GET_PHOTOS_FAILED,
        photos: [],
      })
    })
}
