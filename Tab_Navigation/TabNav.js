/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Address from '../Screens/Address';
import Profile from '../Screens/Profile';
import {People, Location} from '../assets/SVG';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: () => <People width={24} height={24} />,
          }}
        />
        <Tab.Screen
          name="Address"
          component={Address}
          options={{
            headerShown: false,
            tabBarIcon: () => <Location width={24} height={24} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
