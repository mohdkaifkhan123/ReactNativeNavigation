import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeScreen from "../Component/HomeScreen";
import AboutScreen from "../Component/AboutScreen";
import ContactScreen from "../Component/ContactScreen";
const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>    
    </NavigationContainer>
  );
}
