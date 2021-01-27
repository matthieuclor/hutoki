import {RESTORE_TOKEN, SIGN_IN, SIGN_OUT} from '_constants';

const initialState = {
  isLoading: true,
  isSignout: true,
  token: null,
};

const authentificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        ...action.payload,
        isSignout: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        token: null,
        isSignout: true,
      };
    default:
      return state;
  }
};

export default authentificationReducer;
