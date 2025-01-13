import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Preview = () => {
  const [currentImage, setCurrentImage] = useState(require('./assets/violin.png')); // Imagen inicial
  const [fadeAnim] = useState(new Animated.Value(1)); // Valor de opacidad inicial
  const [isButtonPressed, setIsButtonPressed] = useState(false); // Estado del botón
  const navigation = useNavigation(); // Navegación

  const handleNext = () => {
    // Animación de fade out
    Animated.timing(fadeAnim, {
      toValue: 0, // Opacidad final
      duration: 500, // Duración en ms
      useNativeDriver: true,
    }).start(() => {
      // Cambiar imagen o navegar después de la animación
      if (currentImage === require('./assets/violin.png')) {
        setCurrentImage(require('./assets/micro.png')); // Cambiar a la segunda imagen
        fadeAnim.setValue(1); // Reiniciar opacidad
      } else {
        navigation.navigate('Login'); // Navegar a la pantalla de Login
      }
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Animated.Image
          style={[styles.image, { opacity: fadeAnim }]} // Aplicar animación a la opacidad
          source={currentImage}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[
            styles.btn,
            isButtonPressed && styles.btnPressed, // Cambia el estilo al presionar
          ]}
          onPressIn={() => setIsButtonPressed(true)} // Estado al presionar
          onPressOut={() => {
            setIsButtonPressed(false); // Restaurar estado
            handleNext(); // Ejecutar cambio de imagen o navegación
          }}
        >
          <Text style={styles.btnText}>
            <Icon name="navigate-next" color="white" size={30} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6EDE1',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: '90%',
    width: 290,
    marginTop: '10%',
    borderRadius: 25,
  },
  btnContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 50,
  },
  btn: {
    backgroundColor: '#200606',
    borderRadius: 15,
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  btnPressed: {
    backgroundColor: '#763F0F', // Cambia el color del botón al presionar
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export default Preview;
