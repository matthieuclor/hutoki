import {UPDATE_CURRENT_VENUE} from '_constants';
import axios from 'axios';
import qs from 'qs';
import {routes} from '_routes';

export const setCurrentVenue = (currentVenueId) => {
  return (dispatch, getState) => {
    axios({
      method: 'put',
      url: routes.currentVenue.update(),
      data: qs.stringify({
        current_venue: {
          id: currentVenueId,
        },
      }),
      headers: {Authorization: getState().authentification.token},
    })
      .then((response) => dispatch(updateCurrentVenue(response.data.venue)))
      .catch((error) => console.log('error updateCurrentVenue', error));
  };
};

export const updateCurrentVenue = (payload) => {
  return {
    type: UPDATE_CURRENT_VENUE,
    payload: payload,
  };
};
