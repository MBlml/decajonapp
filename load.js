import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const Load = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/logo.png')} />
        <Text style={styles.txt}>Cargando...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7EDE1',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    resizeMode: 'contain',
  },
  txt: {
    fontSize: 20,
  },
});

export default Load;
