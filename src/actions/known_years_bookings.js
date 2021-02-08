import {
  UPDATE_KNOWN_YEARS_BOOKINGS,
  REMOVE_KNOWN_YEARS_BOOKINGS,
} from '_constants';

export const removeKnownYearsBookings = () => {
  return async (dispatch) => {
    dispatch(_removeKnownYearsBookings());
  };
};

export const updateKnownYearsBookings = (payload) => {
  return {
    type: UPDATE_KNOWN_YEARS_BOOKINGS,
    payload: payload,
  };
};

const _removeKnownYearsBookings = () => {
  return {
    type: REMOVE_KNOWN_YEARS_BOOKINGS,
  };
};
