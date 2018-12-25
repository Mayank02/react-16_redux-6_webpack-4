import * as types from './action-types';

export function receiveSample(json) {
  return {type: types.RECEIVE_SAMPLE, sample: json.sample};
}

export function fetchSample() {
  return dispatch => {
    dispatch(receiveSample({sample: 'Sample test'}));
  };
}