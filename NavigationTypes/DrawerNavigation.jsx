import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler"; 
import { createDrawerNavigator } from "@react-navigation/drawer";
import { About, Home, Contact } from "../assets/SVG";
import HomeScreen from "../Component/HomeScreen";
import AboutScreen from "../Component/AboutScreen";
import ContactScreen from "../Component/ContactScreen";
const Drawer = createDrawerNavigator();
export default function DrawerNavigtaion() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          drawerIcon: ({ color, number, focused }) => { 
            return ( 
              <Home style={{height: 30, width: 30}}/>
            );
          },
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color, number, focused }) => { 
            return (
             <About style={{height: 30, width: 30}} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          drawerIcon: ({ color, number, focused }) => {
            return (
            <Contact style={{height: 30, width: 30}}/>
            );
          },
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
