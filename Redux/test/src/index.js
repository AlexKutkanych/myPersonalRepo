import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = [
  'BMW',
  'Audi'
]

function allCars(state = initialState,  action){
  if(action.type === 'ADD_CAR'){
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(allCars)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
//
// store.subscribe(() => {
//   console.log(store.getState());
//   const list = document.querySelector('.list');
//   list.innerHTML = '';
//   document.querySelector('.carInput').value = '';
//   store.getState().forEach(car => {
//     const li = document.createElement('li');
//     li.innerHTML = car;
//     list.appendChild(li);
//   })
// });
//
//
//
//
// const addCarBtn = document.querySelectorAll('.addCar')[0];
// addCarBtn.addEventListener('click', () => {
//   const carName = document.querySelector('.carInput').value;
//   console.log(carName);
//   store.dispatch({type: 'ADD_CAR', payload: carName});
// })
