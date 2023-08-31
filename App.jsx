import * as React from "react";
import { View, Text } from "react-native";

import StackNavigation from "./NavigationTypes/StackNavigation";
import TabNavigation from "./NavigationTypes/TabNavigation";
import DrawerNavigtaion from "./NavigationTypes/DrawerNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
// For to check functionality of each navigation type please comment the components according to need
export default function App() {
  return (
    <>
    <DrawerNavigtaion/>
    <StackNavigation/>
    <TabNavigation/>
    </>
  );
}
