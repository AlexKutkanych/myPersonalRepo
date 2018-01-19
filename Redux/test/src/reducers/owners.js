const initialState = [
  'Alex',
  'Vova'
];

export default function owners(state = initialState,  action){
  if(action.type === 'ADD_OWNER'){
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}
