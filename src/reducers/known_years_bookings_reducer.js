import {
  UPDATE_KNOWN_YEARS_BOOKINGS,
  REMOVE_KNOWN_YEARS_BOOKINGS,
} from '_constants';

const initialState = [];

const knownYearsBookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_KNOWN_YEARS_BOOKINGS:
      return [...state, action.payload];
    case REMOVE_KNOWN_YEARS_BOOKINGS:
      console.log('REMOVE_KNOWN_YEARS_BOOKINGS');
      return [];
    default:
      return state;
  }
};

export default knownYearsBookingsReducer;
