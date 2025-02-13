// navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import WeatherScreen from '../screens/WeatherScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Accueil' , headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ title: 'Auth' , headerShown: false}}
      />
      <Stack.Screen
        name="Weather"
        component={WeatherScreen}
        options={{ title: 'Weather' , headerShown: false}}
      />

    </Stack.Navigator>
  );
};

export default StackNavigator;
