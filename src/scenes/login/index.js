import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const LoginScreen = ({navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      console.log('Login focused');
      return () => {
        console.log('Login unfocused');
      };
    }, []),
  );

  return (
    <SafeAreaView>
      <Text>Screen: Login</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
