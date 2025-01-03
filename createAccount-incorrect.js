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

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
        >
          <Icon name="navigate-before" color="white" size={30} />
        </TouchableOpacity>
      </View>


      <View style={styles.header}>
        <Text style={styles.title}>Registro</Text>
      </View>
      <View style={styles.form}>

        <View style={styles.inputLabel}>
            <Icon name="person" color="#200606" size={30} />

            <TextInput
              style={styles.input}
              placeholder="Nombre(s)"
              onChangeText={setNombre}
              value={nombre}
            />
          </View>
        
        <View style={styles.inputLabel}>
            <Icon name="looks-one" color="#200606" size={30} />

            <TextInput
              style={styles.input}
              placeholder="Primer apellido"
              onChangeText={setApellido1}
              value={apellido1}
            />
          </View>

        <View style={styles.inputLabel}>
            <Icon name="looks-two" color="#200606" size={30} />

            <TextInput
              style={styles.input}
              placeholder="Segundo apellido"
              onChangeText={setApellido2}
              value={apellido2}
            />
          </View>

        <View style={styles.inputLabel}>
            <Icon name="email" color="#200606" size={30} />

            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
          </View>
        
        <View style={styles.inputLabel}>
            <Icon name="lock" color="#200606" size={30} />

            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>

          <Text style={styles.redText}>
            ( ! ) Valor (campo) inválido, verificar.
          </Text>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
      
      <View>
        <Text style={styles.txt}>Ya tengo cuenta</Text>
          <TouchableOpacity
            style={styles.createAccount}
            onPress={() => console.log('Create Account')}>
            <Text style={styles.loginText}>Iniciar Sesión</Text>
          </TouchableOpacity>
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
    marginTop: 20,
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
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    color: 'black',
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
  button: {
    backgroundColor: '#200707',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 53,
    width: '80%',

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
  },
  inputLabel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },createAccount: {
    padding: 20,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 22,
    color: '#763F0F',
    fontWeight: 'bold',
    marginTop: -15,
  },
  txt: {
    color: '#200606',
    fontSize: 20,
    paddingTop: 15,
    textAlign: 'center',
  },
  redText: {
    color: 'red',
    fontSize: 20,
  },
  btnContainer: {
    width: '100%',
    alignItems: 'flex-start', 
    paddingRight: 1,
    marginTop: 50,
  },
  
  btn: {
    backgroundColor: '#200707',
    borderRadius: '50%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 20,
    alignItems: 'center',
  },
});

export default CreateAccount;
