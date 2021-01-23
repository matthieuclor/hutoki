import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {restoreToken, signIn} from '_actions/authentification';
import AuthNavigator from './auth_navigator';
import AppNavigator from './app_navigator';
import Splash from '_scenes/splash';

function RootNavigator(props) {
  if (props.user.isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {props.user.isSignout ? (
        <AuthNavigator />
      ) : (
        <AppNavigator isSignout={props.user.isSignout} />
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    restoreToken: () => dispatch(restoreToken()),
    signIn: (data) => dispatch(signIn(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
