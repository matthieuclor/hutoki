import {RESTORE_TOKEN, SIGN_IN, SIGN_OUT} from '_constants';
import {getUserData, setUserData, clearUserData} from '_actions/user_storage';

export const restoreUserData = () => {
  return async (dispatch) => {
    const userData = await getUserData();

    const payload = (data) => {
      if (data?.userEmail && data?.userPassword) {
        // query to api sign in with user data with setUserData(data)
        return {
          ...data,
          isSignout: false,
        };
      } else {
        return {
          userToken: null,
          userEmail: null,
          userPassword: null,
        };
      }
    };

    dispatch(restoreToken(payload(userData)));
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
