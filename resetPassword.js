import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  

  const handleLogin = () => {
    console.log('Email:', email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recuperar contraseña</Text>

        <Text style={styles.description}>
          Si el correo está registrado, enviaremos un correo con un
          link para crear una nueva contraseña
        </Text>

      </View>

      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Image
          style={styles.image}
          source={require('./assets/logo.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 110,
    marginTop: 300,
  },
  description: {
    fontSize: 22,
    textAlign: 'center',
    color: 'gray',
    marginTop: 25,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fbf2e2',
  },
  header: {
    padding: 20,
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,

    textShadowColor: 'gray',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 12,
  },
  form: {
    padding: 20,
    backgroundColor: '#fcf9f9',
    borderRadius: 20,
    margin: 30,
    marginTop:20,
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
  button: {
    backgroundColor: '#a18b7f',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
  footer: {
    zIndex: 1,
    backgroundColor: '#a18b7f',
    borderRadius: 20,
    height: '100%',
    top: -180,
    alignItems: 'center',
  },
});

export default ResetPassword;
