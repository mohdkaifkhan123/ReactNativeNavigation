import * as React from 'react';
import {View, Text} from 'react-native';

import StackNavigation from './NavigationTypes/StackNavigation';
import TabNavigation from './NavigationTypes/TabNavigation';
import DrawerNavigtaion from './NavigationTypes/DrawerNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';
// Navigation Nesting

export default function App() {
  return (
    <>
      <DrawerNavigtaion />
    </>
  );
}
