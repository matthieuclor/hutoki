import {UPDATE_CURRENT_VENUE} from '_constants';

const initialState = {
  id: null,
};

const currentVenueReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_VENUE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default currentVenueReducer;
