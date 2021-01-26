import {UPDATE_FAMILIES} from '_constants';
import axios from 'axios';
import {routes} from '_routes';

export const getFamilies = () => {
  return (dispatch, getState) => {
    axios({
      method: 'get',
      url: routes.families.index(),
      headers: {Authorization: getState().user.authToken},
    })
      .then((response) => dispatch(updateFamilies(response.data.families)))
      .catch((error) => console.log('error getFamilies', error));
  };
};

export const updateFamilies = (payload) => {
  return {
    type: UPDATE_FAMILIES,
    payload: payload,
  };
};
