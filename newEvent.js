import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

const NewEvent = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');
  const [eventType, setEventType] = useState('');

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    // Formatear la fecha seleccionada
    const formatted = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    setFormattedDate(formatted);
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Icon name="navigate-before" color="white" size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Nuevo Evento</Text>
        <Text style={styles.subtitle}>Fecha del evento:</Text>
      </View>

      <View style={styles.datePickerContainer}>
        <Icon name="event" color="#200606" size={30} />
        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => setShow(true)}
        >
          <Text style={styles.dateText}>
            {formattedDate || 'dd/mm/aaaa'}
          </Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={handleDateChange}
        />
      )}

      <View style={styles.eventTypeContainer}>
        <Icon name="label-outline" color="#200606" size={30} />
        <TextInput
          style={styles.eventTypeInput}
          placeholder="Tipo de evento"
          onChangeText={setEventType}
          value={eventType}
        />
      </View>

      <TouchableOpacity style={styles.button}>
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
    alignItems: 'center',
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
    paddingTop: 100,
    marginLeft: -135,
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
    marginTop: 10,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
    marginVertical: 0,
  },
  dateInput: {
    borderWidth: 1,
    color: '#200606',
    backgroundColor: 'transparent',
    borderBottomColor: 'black',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    margin: 10,
    marginVertical: 0,
    fontSize: 22,
    width: '90%',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 22,
    color: '#200606',
  },
  eventTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
    marginTop: 20,
  },
  eventTypeInput: {
    borderWidth: 1,
    color: '#200606',
    backgroundColor: 'transparent',
    borderBottomColor: 'black',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    margin: 10,
    marginVertical: 0,
    fontSize: 22,
    width: '90%',
  },
  button: {
    backgroundColor: '#200606',
    padding: 15,
    margin: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginVertical: 80,
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

export default NewEvent;
