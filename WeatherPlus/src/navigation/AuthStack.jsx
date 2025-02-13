// navigation/AuthStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthScreen} options={{ title: 'Connexion', headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
