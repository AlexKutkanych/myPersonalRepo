import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/Page';

const initialState = {
  year: 2015,
  photos: [],
  fetching: false
}

export default function page(state = initialState, action) {
  switch(action.type){
    case GET_PHOTOS_REQUEST:
      return {...state, year: action.payload, photos: action.photos, fetching: true}
    case GET_PHOTOS_SUCCESS:
      return {...state, year: action.payload, photos: action.photos, fetching: false}
    default:
      return state
  }
}
