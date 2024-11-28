import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutCityScreen from './screens/AboutCityScreen';
import HistoryScreen from './screens/HistoryScreen';
import AttractionScreen from './screens/AttractionScreen';
import DiningScreen from './screens/DiningScreen';
import BusinessScreen from './screens/BusinessScreen';

import d from './assets/palayan_splash.png'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AboutCityScreen" component={AboutCityScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="AttractionScreen" component={AttractionScreen} />
        <Stack.Screen name="DiningScreen" component={DiningScreen} />
        <Stack.Screen name="BusinessScreen" component={BusinessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
