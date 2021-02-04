import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import AuthNavigator from './auth_navigator';
import TabNavigator from './tab_navigator';
import Splash from '_scenes/splash';

const Stack = createStackNavigator();

class RootNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.authentification.isLoading) {
      return <Splash />;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.authentification.isSignout ? (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          ) : (
            <Stack.Screen name="Tab" component={TabNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
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
