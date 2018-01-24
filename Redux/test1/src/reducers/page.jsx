import {
  GET_ALL_PHOTOS_REQUEST,
  GET_ALL_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILED
 } from '../constants/Page';

const initialState = {
  year: 2015,
  imageType: 'all',
  photos: [],
  fetching: false
}

export default function page(state = initialState, action) {
  switch(action.type){
    case GET_ALL_PHOTOS_REQUEST:
      return {...state, year: action.payload, photos: action.photos, fetching: true}
    case GET_ALL_PHOTOS_SUCCESS:
      return {...state, year: action.payload, photos: action.photos, fetching: false}
    case GET_PHOTOS_FAILED:
      return {...state, year: action.payload, photos: action.photos, fetching: true}
    default:
      return state
  }
}
