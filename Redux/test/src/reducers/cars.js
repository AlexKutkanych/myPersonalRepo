const initialState = [];

export default function allCars(state = initialState,  action){
  if(action.type === 'ADD_CAR'){
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_CARS') {
    return action.payload;
  }
  return state;
}
