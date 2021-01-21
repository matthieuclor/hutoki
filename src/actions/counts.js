import {COUNTER_CHANGE} from '_constants';

export const changeCount = (count) => {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
};
