import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Animated, Dimensions, ViewComponent, _View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [showAIScreen, setShowAIScreen] = useState<boolean>(false); // Estado para controlar la pantalla de IA
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const userName = 'Nombre de usuario';
  const groupName = 'Nombre del grupo';
  const songName = 'Nombre de la canción';
  const songDetails = 'Compositor/Cantante';

  const openAi = () => {
    setShowAIScreen(true); // Mostrar la pantalla de IA
  };

  const goHome = () => {
    setShowAIScreen(false); // Mostrar la pantalla de inicio
  };

  const newEvent = () => {
    navigation.navigate('CreateEvent');
  };

  const openCalendar = () => {
    console.log('Opening Calendar');
  };

  const goProfile = () => {
    console.log('Going to profile');
  };

  const goEditInformation = () => {
    console.log('Going to edit information');
  };

  const goNewGroup = () => {
    navigation.navigate('CreateGroup');
  };

  const logOut = () => {
    navigation.navigate('LoginScreen');
  };

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: Dimensions.get('window').width,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(overlayAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(overlayAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.90,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  const closeMenu = () => {
    if (menuVisible) {
      toggleMenu();
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.contentContainer, { transform: [{ scale: scaleAnim }] }]}>
        {showAIScreen ? (
          // Pantalla de IA

          <View style={{ backgroundColor: 'white', height: '100%', padding: 10, margin: -20 }}>
          
            // Ejemplo de mensaje de IA
            <View style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 15, borderBottomLeftRadius: 0, }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Icon name="auto-awesome" size={20} color="white" 
                  style={{ textAlign: 'left', backgroundColor: '#4A1900', borderWidth: 1, borderColor: '#4A1900', borderRadius: 50, margin: 5, padding: 5, }} />
                <Text style={{ fontSize: 18, }}>
                  ¿Cómo puedo ayudarte?
                </Text>
              </View>
            </View>

          </View>

          

/* 
          // Ejemplo de mensaje de usuario
          <View style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 15, borderBottomLeftRadius: 0, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Icon name="auto-awesome" size={20} color="white" 
                style={{ textAlign: 'left', backgroundColor: '#4A1900', borderWidth: 1, borderColor: '#4A1900', borderRadius: 50, margin: 5, padding: 5, }} />
              <Text style={{ fontSize: 18, }}>
                ¿Cómo puedo ayudarte?
              </Text>
            </View>
          </View> */


        ) : (
          // Pantalla de inicio
          <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.greeting}>¡Hola, {userName}!</Text>

            <TouchableOpacity style={styles.newEventButton} onPress={newEvent}>
              <Text style={styles.newEventText}>Nuevo Evento</Text>
            </TouchableOpacity>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Tus eventos próximos</Text>
              <View style={styles.cardEvent}>
                <Icon style={styles.iconCard} name="thumb-up" size={40} color="#4A1900" />
                <Text style={styles.cardText}>Ahora mismo no tienes eventos próximos</Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ensayos sugeridos</Text>
              <View style={styles.card}>
                <Text style={styles.groupName}>{groupName}</Text>
                <Text style={styles.songTitle}>{songName}</Text>
                <Text style={styles.songDetails}>{songDetails}</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.groupName}>{groupName}</Text>
                <Text style={styles.songTitle}>{songName}</Text>
                <Text style={styles.songDetails}>{songDetails}</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.groupName}>{groupName}</Text>
                <Text style={styles.songTitle}>{songName}</Text>
                <Text style={styles.songDetails}>{songDetails}</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.groupName}>{groupName}</Text>
                <Text style={styles.songTitle}>{songName}</Text>
                <Text style={styles.songDetails}>{songDetails}</Text>
              </View>
            </View>
          </ScrollView>
        )}
      </Animated.View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={goHome}>
          <Icon name="home-filled" size={35} color="#4A1900" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={openCalendar}>
          <Icon name="calendar-month" size={35} color="#4A1900" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={newEvent}>
          <Icon name="add-circle" size={55} color="#4A1900" style={{ margin: -10 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={openAi}>
          <Icon name="auto-awesome" size={35} color="#4A1900" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={toggleMenu}>
          <Icon name="menu" size={35} color="#4A1900" />
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <Animated.View style={[styles.overlay, { opacity: overlayAnim }]}>
          <TouchableOpacity style={styles.overlayTouchable} onPress={closeMenu} activeOpacity={1} />
        </Animated.View>
      )}

      <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
        <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
          <Icon style={styles.closeButtonText} name="close" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goProfile}>
          <Text style={styles.menuText}>Mi Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goEditInformation}>
          <Text style={styles.menuText}>Editar Información</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goNewGroup}>
          <Text style={styles.menuText}>Nuevo Grupo</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.menuItem} onPress={logOut}>
          <Text style={styles.menuText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EDE1',
    padding: 20,
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 40,
    color: '#4A4A4A',
  },
  newEventButton: {
    backgroundColor: '#4A1900',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  newEventText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A4A4A',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardEvent: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 60,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    color: '#4A4A4A',
    textAlign: 'center',
  },
  iconCard: {
    textAlign: 'center',
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 5,
    textAlign: 'right',
  },
  songTitle: {
    fontSize: 16,
    color: '#4A4A4A',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  songDetails: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#4A1900',
    padding: 10,
    marginBottom: -20,
    marginHorizontal: -20,
    position: 'relative',
  },
  footerItem: {
    alignItems: 'center',
    color: 'black',
  },
  footerText: {
    fontSize: 12,
    color: 'black',
  },
  menu: {
    position: 'absolute',
    marginLeft: 100,
    paddingTop: 50,
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuText: {
    fontSize: 18,
    color: '#4A4A4A',
  },
  closeButton: {
    alignSelf: 'flex-end',
    width: 40,
  },
  closeButtonText: {
    color: '#4A1900',
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: 480,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  overlayTouchable: {
    flex: 1,
  },
});

export default Home;