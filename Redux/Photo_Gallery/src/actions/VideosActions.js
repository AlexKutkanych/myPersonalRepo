import { GET_VIDEOS_SUCCESS, GET_VIDEOS_FAILED, PIXABAY_API_VIDEOS } from '../constants/Page';
import axios from 'axios';

export const getVideos = (videoType = 'all', request = 'nature', perPage = 6) => dispatch => {
  return axios.get(`${PIXABAY_API_VIDEOS}&video_type=${videoType}&q=${request}&per_page=${perPage}&pretty=true`)
    .then(res => {
      dispatch({
        type: GET_VIDEOS_SUCCESS,
        data: res.data.hits
      })
    })
    .catch(err => {
      dispatch({
        type: GET_VIDEOS_FAILED,
        data: [],
      })
    })
}
