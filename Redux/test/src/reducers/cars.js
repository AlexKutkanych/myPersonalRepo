const initialState = [
  {
    id: 1,
    carName: 'Acura'
  },
  {
    id: 2,
    carName: 'Daewoo'
  }
];

export default function allCars(state = initialState,  action){
  if(action.type === 'ADD_CAR'){
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_CARS') {
    return [
      ...state,
      ...action.payload
    ];
  } else if (action.type === 'DELETE_CARS') {
    const newState = state;
    const test = state.findIndex(car => {
        return car.id === +action.payload;
      });
    newState.splice(test, 1);
    return [
      ...newState
    ];
  }
  return state;
}
