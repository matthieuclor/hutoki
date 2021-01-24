import {RESTORE_TOKEN, SIGN_IN, SIGN_OUT} from '_constants';

const initialState = {
  isLoading: true,
  isSignout: true,
  authToken: null,
  email: null,
  firstName: null,
  lastName: null,
  phone: null,
  address: null,
  plan: null,
  planDeadline: null,
  currentFamilyId: null,
  currentSchoolHolidayZones: null,
  currentVenueId: null,
};

const authReducer = (state = initialState, action) => {
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
        userToken: action.payload,
        isSignout: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        userToken: null,
        isSignout: true,
      };
    default:
      return state;
  }
};

export default authReducer;
