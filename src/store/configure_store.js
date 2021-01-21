import {createStore, combineReducers} from 'redux';
import countReducer from '_reducers/count_reducer';

const rootReducer = combineReducers({test: countReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
