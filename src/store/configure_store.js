import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authentificationReducer from '_reducers/authentification_reducer';
import currentUserReducer from '_reducers/current_user_reducer';
import familiesReducer from '_reducers/families_reducer';
import venuesReducer from '_reducers/venues_reducer';

const rootReducer = combineReducers({
  authentification: authentificationReducer,
  currentUser: currentUserReducer,
  families: familiesReducer,
  venues: venuesReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
