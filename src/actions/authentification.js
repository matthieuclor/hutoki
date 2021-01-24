import {RESTORE_TOKEN, SIGN_IN, SIGN_OUT} from '_constants';
import axios from 'axios';
import qs from 'qs';
import {routes} from '_routes';
import {getUserData, setUserData, clearUserData} from '_actions/user_storage';

export const restoreUserData = () => {
  return async (dispatch) => {
    const user = await getUserData();

    if (user?.email && user?.password) {
      axios({
        method: 'post',
        url: routes.authentification.create(),
        data: qs.stringify({
          user: {
            email: user.email,
            password: user.password,
          },
        }),
      })
        .then((response) => {
          dispatch(
            restoreToken({
              ...response.data.user,
              isSignout: false,
            }),
          );
        })
        .catch((error) => {
          console.log('error', error);
          dispatch(restoreToken({}));
        });
    } else {
      dispatch(restoreToken({}));
    }
  };
};

export const signIn = (data) => {
  return {
    type: SIGN_IN,
    payload: setUserData(data),
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: clearUserData(),
  };
};

export const restoreToken = (payload) => {
  return {
    type: RESTORE_TOKEN,
    payload: payload,
  };
};
