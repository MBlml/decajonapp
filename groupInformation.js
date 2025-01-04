import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateAccount = () => {
  const [nameGroup, setNameGroup] = useState(null); 


  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Icon name="navigate-before" color="white" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>
          Mariachi{'\n'}Mexcalli
        </Text>
        <Text style={styles.subtitle}>
          Tu ID del grupo es:
        </Text>
      </View>

      <View style={styles.container1}>
        <Icon name="groups" color="#200606" size={50} />

        <Text style={styles.idGroup}>
          MMEX12
        </Text>
      </View>

      <View style={styles.header2}>
        <Text style={styles.subtitle2}>
          Contraseña del grupo
        </Text>
      </View>

      <View style={styles.container1}>
        <Icon name="key" color="#200606" size={50} />

        <Text style={styles.idGroup}>
          Xm9KpL3
        </Text>
      </View>

      <Text style={styles.subtitle3}>
        Compártela con tus compañeros de grupo para que accedan a eventos y ensayos personalizados en conjunto.{'\n\n'}Solo tú tienes acceso a esta información.
      </Text>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Image style={styles.image} source={require('./assets/logo.png')} />
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
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  header2: {
    padding: 20,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    textShadowColor: 'gray',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingRight: 20,
    paddingTop: 30,
  },
  subtitle2: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingRight: 20,
    paddingTop: 0,
  },
  subtitle3: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingRight: 30,
    paddingLeft: 40,
    paddingTop: 10,
    color: '#763F0E',
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
  image: {
    width: 100,
    height: 40,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 40,
    
    marginVertical: 0,
  },
  idGroup: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 10,
  },button: {
    backgroundColor: '#200606',
    padding: 15,
    margin: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',

    marginVertical: 30,

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
});

export default CreateAccount;
