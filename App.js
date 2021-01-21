import React from 'react';
import {StatusBar} from 'react-native';
import SrcApp from './src';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SrcApp />
    </>
  );
};

export default App;
