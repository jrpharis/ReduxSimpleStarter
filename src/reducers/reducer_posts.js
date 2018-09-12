import {FETCH_POSTS} from '../actions';
import _ from 'lodash';

export default function (state = null, action){
  switch(action.type){
    case FETCH_POSTS:
      console.log('action FETCHPOST', action);
      return _.mapKeys(action.payload.data, 'id');
    default:
      console.log('default action');
      return state;
  }
}