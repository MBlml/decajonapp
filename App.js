// app.js
import React from 'react';
import MyApp from './createAccount-incorrect.js';

const App = () => {
  return <MyApp />;
};

export default App; 

/*
// app.js
import React, { useState, useEffect } from 'react'; 
import { Animated, View } from 'react-native';
import Load from './load';
import Login from './login';
import CreateAccount from './createAccount';
import ResetPassword from './resetPassword';
import ResetPassword1 from './resetPassword1';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Load');
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const screens = ['Load', 'Login', 'CreateAccount', 'ResetPassword', 'ResetPassword1']; 
    let currentIndex = 0;

    const timer = setInterval(() => {
      fadeOut().start();
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % screens.length;
        setCurrentScreen(screens[currentIndex]);
        fadeIn().start();
      }, 500);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [opacity]);

  const fadeOut = () => {
    return Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    });
  };

  const fadeIn = () => {
    return Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Load':
        return <Load />;
      case 'Login':
        return <Login />;
      case 'CreateAccount':
        return <CreateAccount />;
      case 'ResetPassword':
        return <ResetPassword />;
      case 'ResetPassword1': 
        return <ResetPassword1 />;
      default:
        return <Load />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1, opacity }}>
        {renderScreen()}
      </Animated.View>
    </View>
  );
};

export default App;

 */
