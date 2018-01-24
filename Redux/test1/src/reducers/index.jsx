import { combineReducers } from 'redux';
import page from './page';
import user from './user';
import year from './year';

export default combineReducers({
  page,
  user,
  year
})
