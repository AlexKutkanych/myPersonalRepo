import { SET_FILTER } from '../constants/Page';

const initialState = {
  filter: 'all'
}

export default function page(state = initialState, action) {
  switch(action.type){
    case SET_FILTER:
      return {...state, filter: action.filter}
    default:
      return state
  }
}
