import {UPDATE_CURRENT_USER} from '_constants';

export const updateCurrentUser = (payload) => {
  return {
    type: UPDATE_CURRENT_USER,
    payload: payload,
  };
};
