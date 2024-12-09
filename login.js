import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

//import { useNavigation } from '@react-navigation/native';

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
        <Image style={styles.image} source={require('./assets/guitarra.png')} />
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <Image style={styles.image2} source={require('./assets/logo.png')} />

        <View style={styles.form}>
          <View style={styles.emailInput}>
            <Icon name="email" color="#200606" size={30} />

            <TextInput
              style={styles.input}
              placeholder="Correo"
              onChangeText={setEmail}
              value={email}
            />
          </View>

          <View style={styles.passwordInput}>
            <Icon name="lock" color="#200606" size={30} />

            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => console.log('Forgot Password')}>
            <Text style={styles.txt}>Olvidé mi contraseña</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.txt}>¿Aún no tienes cuenta?</Text>
          <TouchableOpacity
            style={styles.createAccount}
            onPress={() => console.log('Create Account')}>
            <Text style={styles.createAccountText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4CCB0',
    zIndex: 1,
  },
  header: {
    alignItems: 'center',
  },
  body: {
    paddingTop: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#200606',
    marginLeft: 38,
  },
  image: {
    width: '100%',
    height: 400,
  },
  image2: {
    position: 'absolute',
    width: '50%',
    height: 150,
    right: 15,
    top: 50,
    opacity: 0.2,
  },
  form: {
    paddingTop: 30,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    color: '#200606',
    backgroundColor: 'transparent',
    borderBottomColor: 'black',

    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,

    borderBottomWidth: 2,

    padding: 5,
    margin: 10,
    marginVertical: 10,
    fontSize: 22,
    width: '70%',
  },
  forgotPassword: {
    padding: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#200606',
    padding: 15,
    marginBottom: -5,
    borderRadius: 50,
    alignItems: 'center',
    width: 160,

    shadowColor: '#200606',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 16, 
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  createAccount: {
    padding: 20,
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: 22,
    color: '#200606',
    fontWeight: 'bold',
    marginTop: -15,
  },
  txt: {
    color: '#763F0F',
    fontSize: 20,
    paddingTop: 15,
  },
  emailInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;

/* 
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
 */
