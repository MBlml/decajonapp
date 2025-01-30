import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadScreen from '../screens/LoadScreen.tsx';
import HomeScreen from '../screens/HomeScreen.tsx';

export type RootStackParamList = {
  LoadScreen: undefined;
  HomeScreen: undefined;
  Details: { itemId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
