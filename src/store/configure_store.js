import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authentificationReducer from '_reducers/authentification_reducer';
import currentUserReducer from '_reducers/current_user_reducer';
import currentFamilyReducer from '_reducers/current_family_reducer';
import currentVenueReducer from '_reducers/current_venue_reducer';
import familiesReducer from '_reducers/families_reducer';
import venuesReducer from '_reducers/venues_reducer';
import yearBookingsReducer from '_reducers/year_bookings_reducer';
import knownYearsBookingsReducer from '_reducers/known_years_bookings_reducer';

const rootReducer = combineReducers({
  authentification: authentificationReducer,
  currentUser: currentUserReducer,
  currentFamily: currentFamilyReducer,
  currentVenue: currentVenueReducer,
  families: familiesReducer,
  venues: venuesReducer,
  yearBookings: yearBookingsReducer,
  knownYearsBookings: knownYearsBookingsReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
