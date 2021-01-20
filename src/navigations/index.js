import React from 'react';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

function RootNavigator() {
  return true ? <AppNavigator /> : <AuthNavigator />;
}

export default RootNavigator;
