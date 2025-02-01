import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadScreen from '../screens/LoadScreen.tsx';
import PreviewScreen from '../screens/PreviewScreen.tsx';
import LoginScreen from '../screens/LoginScreen.tsx';
import HomeScreen from '../screens/HomeScreen.tsx';

import CreateAccount from '../screens/CreateAccount.tsx';
import ForgotPassword from '../screens/ForgotPassword.tsx';
import ResetPassword from '../screens/ResetPassword.tsx';


//Agregar pantallas faltantes al stack navigator :)

export type RootStackParamList = {
  LoadScreen: undefined;
  PreviewScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  CreateAccount: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoadScreen" component={LoadScreen} />
        <Stack.Screen name="PreviewScreen" component={PreviewScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
