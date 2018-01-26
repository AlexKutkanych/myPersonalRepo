import {
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_FAILED
 } from '../constants/Page';

const initialState = {
  data: [],
}

export default function videos(state = initialState, action) {
  switch(action.type){
    case GET_VIDEOS_SUCCESS:
      return {...state, data: action.data}
    case GET_VIDEOS_FAILED:
      return {...state, data: action.data}
    default:
      return state
  }
}
