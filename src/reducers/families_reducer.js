import {UPDATE_FAMILIES} from '_constants';

const initialState = [];

const familiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FAMILIES:
      return action.payload;
    default:
      return state;
  }
};

export default familiesReducer;
