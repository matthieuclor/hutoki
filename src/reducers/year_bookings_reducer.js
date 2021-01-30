import {UPDATE_YEAR_BOOKINGS, REMOVE_YEAR_BOOKINGS} from '_constants';

const initialState = {};

const yearBookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_YEAR_BOOKINGS:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_YEAR_BOOKINGS:
      return {};
    default:
      return state;
  }
};

export default yearBookingsReducer;
