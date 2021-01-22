import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import countReducer from '_reducers/count_reducer';
import authReducer from '_reducers/auth_reducer';

const rootReducer = combineReducers({
  test: countReducer,
  user: authReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
