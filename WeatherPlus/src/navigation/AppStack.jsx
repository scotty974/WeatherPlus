// navigation/AppStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherScreen from '../screens/WeatherScreen';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Weather" component={WeatherScreen} options={{ title: 'Weather', headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppStack;
