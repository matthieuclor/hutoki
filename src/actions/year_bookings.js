import {UPDATE_YEAR_BOOKINGS, REMOVE_YEAR_BOOKINGS} from '_constants';
import axios from 'axios';
import {routes} from '_routes';

export const getYearBookings = (year) => {
  return (dispatch, getState) => {
    axios({
      method: 'get',
      url: routes.yearBookings.index(year),
      headers: {Authorization: getState().authentification.token},
    })
      .then((response) => dispatch(updateYearBookings(response.data.bookings)))
      .catch((error) => console.log('error getYearBookings', error));
  };
};

export const updateYearBookings = (payload) => {
  return {
    type: UPDATE_YEAR_BOOKINGS,
    payload: payload,
  };
};

export const removeYearBookings = () => {
  return {
    type: REMOVE_YEAR_BOOKINGS,
  };
};
