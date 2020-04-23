import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Navigator
import BottomNavigator from './navigators/BottomNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}