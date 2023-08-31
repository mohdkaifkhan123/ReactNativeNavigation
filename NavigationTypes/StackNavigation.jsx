import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeScreen from "../Component/HomeScreen";
import AboutScreen from "../Component/AboutScreen";
import ContactScreen from "../Component/ContactScreen";
const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();
export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>    
    </NavigationContainer>
  );
}
