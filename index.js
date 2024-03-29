import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from '_store/configure_store';

LogBox.ignoreLogs(['Remote debugger']);

const store = configureStore();

const ReactNativeRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReactNativeRedux);
