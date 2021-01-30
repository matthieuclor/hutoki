import {RESTORE_TOKEN, SIGN_IN, SIGN_OUT} from '_constants';
import axios from 'axios';
import qs from 'qs';
import {routes} from '_routes';
import {getUserData, setUserData, clearUserData} from '_actions/user_storage';
import {updateCurrentUser} from '_actions/current_user';
import {updateCurrentFamily} from '_actions/current_family';
import {updateCurrentVenue} from '_actions/current_venue';

const authentification = async (user) => {
  if (user?.email && user?.password) {
    return axios({
      method: 'post',
      url: routes.authentification.create(),
      data: qs.stringify({
        user: {
          email: user.email,
          password: user.password,
        },
      }),
    });
  } else {
    throw new Error('email or password missing');
  }
};

export const restoreUserData = () => {
  return async (dispatch) => {
    const user = await getUserData();

    authentification(user)
      .then((response) => {
        dispatch(restoreToken({token: response.data.token, isSignout: false}));
        dispatch(updateCurrentUser(response.data.user));
        dispatch(updateCurrentFamily(response.data.family));
        dispatch(updateCurrentVenue(response.data.venue));
      })
      .catch((error) => {
        dispatch(restoreToken({}));
        console.log('error restoreUserData', error);
      });
  };
};

export const authenticateUser = (user) => {
  return async (dispatch) => {
    authentification(user)
      .then((response) => {
        setUserData(user).then(() => {
          dispatch(signIn({token: response.data.token, isSignout: false}));
          dispatch(updateCurrentUser(response.data.user));
          dispatch(updateCurrentFamily(response.data.family));
          dispatch(updateCurrentVenue(response.data.venue));
        });
      })
      .catch((error) => {
        console.log('error authenticateUser', error);
      });
  };
};

const signIn = (payload) => {
  return {
    type: SIGN_IN,
    payload: payload,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: clearUserData(),
  };
};

const restoreToken = (payload) => {
  return {
    type: RESTORE_TOKEN,
    payload: payload,
  };
};
