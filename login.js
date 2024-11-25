import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';


import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('./assets/logo.png')}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => console.log('Forgot Password')}>
          <Text style={styles.forgotPasswordText}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createAccount}
          onPress={() => console.log('Create Account')}>
          <Text style={styles.createAccountText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf2e2',
  },
  header: {
    padding: 20,
    marginTop: 100,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 200,
  },
  form: {
    padding: 20,
    backgroundColor: '#fcf9f9',
    borderRadius: 20,
    margin: 30,
    marginTop: 80,
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 30,
    zIndex: 2,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#d9d9d9',
    borderColor: 'transparent',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    fontSize: 20,
  },
  forgotPassword: {
    padding: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#65b9fe',
  },
  button: {
    backgroundColor: '#a18b7f',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
  createAccount: {
    padding: 10,
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: 16,
    color: '#65b9fe',
  },
  footer: {
    zIndex: 1,
    backgroundColor: '#a18b7f',
    borderRadius: 20,
    height: '100%',
    top: -300,
  },
});

export default App;
