import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '_scenes/login';

const Stack = createStackNavigator();

class AuthNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Espace utilisateur"
          component={Login}
          options={{
            animationTypeForReplace: this.props.isSignout ? 'pop' : 'push',
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default AuthNavigator;
