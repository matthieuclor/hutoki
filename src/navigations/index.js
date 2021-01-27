import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AuthNavigator from './auth_navigator';
import AppNavigator from './app_navigator';
import Splash from '_scenes/splash';

function RootNavigator(props) {
  if (props.authentification.isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {props.authentification.isSignout ? (
        <AuthNavigator />
      ) : (
        <AppNavigator isSignout={props.authentification.isSignout} />
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    authentification: state.authentification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
