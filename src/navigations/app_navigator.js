import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '_scenes/dashboard';
import Members from '_scenes/members';
import Venues from '_scenes/venues';
import Notifications from '_scenes/notifications';
import Settings from '_scenes/settings';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY} from '_styles/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: PRIMARY,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="calendar" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lieux"
        component={Venues}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Membres"
        component={Members}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="users" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="bell-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="user-circle-o" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
