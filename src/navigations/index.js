import React from 'react';
// import AuthNavigator from './auth_navigator';
// import AppNavigator from './app_navigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '_scenes/splash';
import Home from '_scenes/home';
import Login from '_scenes/login';
import {connect} from 'react-redux';
import {restoreToken, signIn} from '_actions/authentification';

const Stack = createStackNavigator();

function RootNavigator(props) {
  if (props.user.isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.user.isSignout ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',
              animationTypeForReplace: props.user.isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
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
