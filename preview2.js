import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Preview2 = () => {
  const handleLogin = () => {
    console.log('Funcion para avanzar a preview2');
    //Funcion para avanzar a preview2
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/micro.png')} />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
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
    backgroundColor: '#F7EDE1',
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
    backgroundColor: '#763F0F',
    borderRadius: 15,
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export default Preview2;
