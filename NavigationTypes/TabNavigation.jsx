import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';
import ContactScreen from '../components/ContactScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Address" component={ContactScreen} />
    </Tab.Navigator>
  );
}
