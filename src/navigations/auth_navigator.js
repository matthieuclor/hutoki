import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '_scenes/login';

const Stack = createStackNavigator();

const AuthNavigator = (isSignout) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          animationTypeForReplace: isSignout ? 'pop' : 'push',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
