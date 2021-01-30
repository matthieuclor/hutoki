import {UPDATE_CURRENT_FAMILY} from '_constants';

const initialState = {
  id: null,
};

const currentFamilyReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_FAMILY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default currentFamilyReducer;
