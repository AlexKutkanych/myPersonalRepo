import { combineReducers } from 'redux';
import page from './page';
import user from './user';
import filter from './filter';

export default combineReducers({
  page,
  user,
  filter
})
