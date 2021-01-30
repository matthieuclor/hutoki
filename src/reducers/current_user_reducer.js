import {UPDATE_CURRENT_USER} from '_constants';

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  phone: null,
  address: null,
  plan: null,
  planDeadline: null,
  currentSchoolHolidayZones: null,
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
