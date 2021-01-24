import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '_reducers/auth_reducer';

const rootReducer = combineReducers({
  user: authReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
