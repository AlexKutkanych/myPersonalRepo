import { combineReducers } from 'redux';
import images from './images';
import videos from './videos';
import user from './user';
import filter from './filter';

export default combineReducers({
  images,
  videos,
  user,
  filter
})
