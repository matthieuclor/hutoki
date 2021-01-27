import {UPDATE_VENUES} from '_constants';
import axios from 'axios';
import {routes} from '_routes';

export const getVenues = () => {
  return (dispatch, getState) => {
    axios({
      method: 'get',
      url: routes.venues.index(),
      headers: {Authorization: getState().authentification.token},
    })
      .then((response) => dispatch(updateVenues(response.data.venues)))
      .catch((error) => console.log('error getVenues', error));
  };
};

export const updateVenues = (payload) => {
  return {
    type: UPDATE_VENUES,
    payload: payload,
  };
};
