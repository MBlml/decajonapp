import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Load = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/micro.png')} />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
        >
          <Text style={styles.btnText}>     >     </Text>
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
    width: 300,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Load;
