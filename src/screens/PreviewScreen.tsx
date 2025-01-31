import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageSourcePropType, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/StackNavigator'; 

type PreviewScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PreviewScreen'>;

const Preview: React.FC = () => {
  const navigation = useNavigation<PreviewScreenNavigationProp>(); 
  const [currentImage, setCurrentImage] = useState<ImageSourcePropType>(require('../assets/violin.png')); 
  const [fadeAnim] = useState(new Animated.Value(1));
  const [isButtonPressed, setIsButtonPressed] = useState<boolean>(false);

  const handleNext = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      if (currentImage === require('../assets/violin.png')) {
        setCurrentImage(require('../assets/micro.png')); 
        fadeAnim.setValue(1);
      } else {
        console.log('Login');
      }
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Animated.Image
          style={[styles.image, { opacity: fadeAnim }]}
          source={currentImage}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.btn, isButtonPressed && styles.btnPressed]}
          onPressIn={() => setIsButtonPressed(true)}
          onPressOut={() => {
            setIsButtonPressed(false);
            handleNext();
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
    backgroundColor: '#763F0F',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export default Preview;
