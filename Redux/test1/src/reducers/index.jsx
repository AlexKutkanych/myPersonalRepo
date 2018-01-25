import { combineReducers } from 'redux';
import content from './content';
import user from './user';
import filter from './filter';

export default combineReducers({
  content,
  user,
  filter
})
