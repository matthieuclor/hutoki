import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '_reducers/auth_reducer';
import familiesReducer from '_reducers/families_reducer';

const rootReducer = combineReducers({
  user: authReducer,
  families: familiesReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
