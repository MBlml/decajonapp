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
  const [newPassword, setnewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  

  const handleLogin = () => {
    console.log('newPassword:', newPassword);
    console.log('confirmPassword:', setconfirmPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reestablecer Contraseña</Text>
        <Text style={styles.description}>
          La contraseña debe cumplir los siguientes requisitos:
        </Text>
      </View>

      
      <View style={styles.form}>
        <Text style={styles.description1}>
          • Entre 8-24 caracteres{"\n"}
          • Mayusculas y {"\n"}   minusculas{"\n"}
          • Al menos un caracter especial{"\n"}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nueva contraseña"
          onChangeText={setnewPassword}
          value={setnewPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          onChangeText={setconfirmPassword}
          value={setconfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Reestablecer</Text>
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
    marginTop: 500,
  },
  description: {
    fontSize: 22,
    paddingLeft: 30,
    paddingRight: 30,
    color: 'gray',
    marginTop: 25,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
  description1: {
    fontSize: 22,
    color: 'gray',
    marginTop: 0,
    paddingRight: 0,
    marginBottom: 15,
    paddingLeft: 25,
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
    textAlign: 'center',
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
    color: 'gray',
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
    marginTop: 20,
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

export default ResetPassword;
