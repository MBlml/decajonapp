import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const CreateAccount = () => {
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Crear cuenta</Text>
      </View>
      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder="Nombre(s)"
          onChangeText={setNombre}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Primer apellido"
          onChangeText={setApellido1}
          value={apellido1}
        />
        <TextInput
          style={styles.input}
          placeholder="Segundo apellido"
          onChangeText={setApellido2}
          value={apellido2}
        />
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
    top: -300,
    alignItems: 'center',
  },
});

export default CreateAccount;
