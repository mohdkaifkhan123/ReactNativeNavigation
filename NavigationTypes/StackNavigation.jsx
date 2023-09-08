import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';
import ContactScreen from '../components/ContactScreen';
import TabNavigation from './TabNavigation';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Address" component={ContactScreen} />
    </Stack.Navigator>
  );
}
