import {UPDATE_CURRENT_FAMILY} from '_constants';
import axios from 'axios';
import qs from 'qs';
import {routes} from '_routes';

export const getCurrentFamily = (currentFamilyId) => {
  return (dispatch, getState) => {
    axios({
      method: 'put',
      url: routes.currentFamily.update(),
      data: qs.stringify({
        current_family: {
          id: currentFamilyId,
        },
      }),
      headers: {Authorization: getState().authentification.token},
    })
      .then((response) => {
        dispatch(updateCurrentFamily(response.data.family));
      })
      .catch((error) => console.log('error updateCurrentFamily', error));
  };
};

export const updateCurrentFamily = (payload) => {
  return {
    type: UPDATE_CURRENT_FAMILY,
    payload: payload,
  };
};
