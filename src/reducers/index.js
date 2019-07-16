import { combineReducers } from 'redux';
import postReducer from './posts/post';

export default combineReducers({
  posts: postReducer,
})