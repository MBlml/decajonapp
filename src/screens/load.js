import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Load = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Preview');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

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
