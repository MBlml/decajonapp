import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen.tsx';
import DetailsScreen from '../screens/DetailsScreen.tsx';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
