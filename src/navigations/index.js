import React from 'react';
import AuthNavigator from './auth_navigator';
import AppNavigator from './app_navigator';

function RootNavigator() {
  return true ? <AppNavigator /> : <AuthNavigator />;
}

export default RootNavigator;
