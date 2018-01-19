const initialState = [
  'SUV',
  'Pickup'
]

export default function carSegments(state = initialState,  action){
  if(action.type === 'ADD_SEGMENT'){
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'DELETE_SEGMENT') {
    return state;
  }
  return state;
}
