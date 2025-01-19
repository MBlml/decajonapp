// app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Load from './load';
import Preview from './preview';
import Login from './login';
import Home from './home';
import NewEvent from './newEvent';
import ResetPassword from './resetPassword1';
import CreateAccount from './createAccount';

const Stack = createStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Load" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Load" component={Load}/>
        <Stack.Screen name="Preview" component={Preview}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="NewEvent" component={NewEvent}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
