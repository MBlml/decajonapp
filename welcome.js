import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateAccount = () => {
  const [activeCard, setActiveCard] = useState(null); // Estado para rastrear la tarjeta seleccionada

  const handlePress = (card) => {
    setActiveCard(card); // Actualiza la tarjeta activa
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Icon name="navigate-before" color="white" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>
          ¿Cuál es la opción más adecuada para ti?
        </Text>
      </View>

      <View style={styles.cards}>
        {/* Primera tarjeta */}
        <TouchableOpacity
          style={[
            styles.card,
            activeCard === 'create' && styles.activeCard, // Cambia el estilo si es activa
          ]}
          onPress={() => handlePress('create')} // Cambia el estado al presionarla
        >
          <Icon
            style={[
              styles.icon,
              activeCard === 'create' && styles.activeIcon, // Cambia el fondo del ícono si es activa
            ]}
            name="library-music"
            color="white"
            size={45}
          />
          <Text style={styles.txt}>Crear nuevo grupo</Text>
        </TouchableOpacity>

        {/* Segunda tarjeta */}
        <TouchableOpacity
          style={[
            styles.card,
            activeCard === 'join' && styles.activeCard, // Cambia el estilo si es activa
          ]}
          onPress={() => handlePress('join')} // Cambia el estado al presionarla
        >
          <Icon
            style={[
              styles.icon,
              activeCard === 'join' && styles.activeIcon, // Cambia el fondo del ícono si es activa
            ]}
            name="groups"
            color="white"
            size={45}
          />
          <Text style={styles.txt}>Unirme a un grupo</Text>
        </TouchableOpacity>
      </View>

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
  cards: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  card: {
    width: '40%',
    margin: 15,
    padding: 15,
    paddingVertical: 25,
    backgroundColor: '#200606',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
  },
  activeCard: {
    backgroundColor: '#763F0E', // Color de la tarjeta activa
  },
  icon: {
    margin: 0,
    width: '45%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#763F0E',
  },
  activeIcon: {
    backgroundColor: '#200606', // Fondo del ícono cuando la tarjeta está activa
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 40,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
  },
});

export default CreateAccount;
