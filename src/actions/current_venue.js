import {updateCurrentUser} from '_actions/current_user';
import axios from 'axios';
import qs from 'qs';
import {routes} from '_routes';

export const updateCurrentVenue = (currentVenueId) => {
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
      .then((response) => dispatch(updateCurrentUser(response.data.user)))
      .catch((error) => console.log('error updateCurrentVenue', error));
  };
};
