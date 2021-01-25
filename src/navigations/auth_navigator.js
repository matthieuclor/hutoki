import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '_scenes/login';

const Stack = createStackNavigator();

const AuthNavigator = (isSignout) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Espace utilisateur"
        component={Login}
        options={{animationTypeForReplace: isSignout ? 'pop' : 'push'}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
