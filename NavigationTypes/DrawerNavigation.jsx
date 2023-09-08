/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {About, Home, Contact, Navigation} from '../assets/SVG';
import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';
import ContactScreen from '../components/ContactScreen';
import StackNavigation from './StackNavigation';
const Drawer = createDrawerNavigator();
export default function DrawerNavigtaion() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="NavigationTab"
          component={StackNavigation}
          options={{
            drawerIcon: ({color, number, focused}) => {
              return <Navigation style={{height: 30, width: 30}} />;
            },
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            drawerIcon: ({color, number, focused}) => {
              return <Home style={{height: 30, width: 30}} />;
            },
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            drawerIcon: ({color, number, focused}) => {
              return <About style={{height: 30, width: 30}} />;
            },
          }}
        />
        <Drawer.Screen
          name="Address"
          component={ContactScreen}
          options={{
            drawerIcon: ({color, number, focused}) => {
              return <Contact style={{height: 30, width: 30}} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
