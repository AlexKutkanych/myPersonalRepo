import { combineReducers } from 'redux';

import cars from './cars';
import carSegments from './carSegments';
import owners from './owners';
import filterCars from './filterCars';

export default combineReducers({
  cars,
  carSegments,
  owners,
  filterCars
})
