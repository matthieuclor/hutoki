import {
  UPDATE_KNOWN_YEARS_BOOKINGS,
  REMOVE_KNOWN_YEARS_BOOKINGS,
} from '_constants';

export const updateKnownYearsBookings = (payload) => {
  return {
    type: UPDATE_KNOWN_YEARS_BOOKINGS,
    payload: payload,
  };
};

export const removeKnownYearsBookings = () => {
  return {
    type: REMOVE_KNOWN_YEARS_BOOKINGS,
  };
};
