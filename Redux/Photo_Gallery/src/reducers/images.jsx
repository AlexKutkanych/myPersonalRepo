import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILED
 } from '../constants/Page';

const initialState = {
  data: [],
  isLoading: false
}

export default function images(state = initialState, action) {
  switch(action.type){
    case GET_PHOTOS_REQUEST:
      return {...state, data: [], isLoading: true}
    case GET_PHOTOS_SUCCESS:
      return {...state, data: action.data, isLoading: false}
    case GET_PHOTOS_FAILED:
      return {...state, data: action.data, isLoading: true}
    default:
      return state
  }
}
