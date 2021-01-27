import {UPDATE_VENUES} from '_constants';

const initialState = [];

const venuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VENUES:
      return action.payload;
    default:
      return state;
  }
};

export default venuesReducer;
