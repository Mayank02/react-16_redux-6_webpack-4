import initialState from './initial-state';
import {FETCH_SAMPLE, RECEIVE_SAMPLE} from '../actions/action-types';

export default function sample(state = initialState.sample, action) {
  let newState;
  switch (action.type) {
    case FETCH_SAMPLE:
      return action;
    case RECEIVE_SAMPLE:
      newState = action.sample;
      return newState;
    default:
      return state;
  }
}