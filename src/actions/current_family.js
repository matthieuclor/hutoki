import {updateCurrentUser} from '_actions/current_user';
import axios from 'axios';
import qs from 'qs';
import {routes} from '_routes';

export const updateCurrentFamily = (currentFamilyId) => {
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
      .then((response) => dispatch(updateCurrentUser(response.data.user)))
      .catch((error) => console.log('error restoreUserData', error));
  };
};
