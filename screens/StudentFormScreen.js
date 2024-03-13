import { parseValue } from 'graphql';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export const studentForm = []

const StudentFormScreen = ({ navigation }) => {

    const [tuition , setTuition] = useState('')
    const [name , setName] = useState('')
    const [lastName , setLastName] = useState('')
    const [grade , setGrade] = useState('')
    const [average , setAverage] = useState('')

const add = () => {
  const studentData = {
      tuition : tuition,
      name : name,
      lastName : lastName,
      grade : grade,
      average : average
  }
  studentForm.push(studentData)
  navigation.navigate('HomeScreen');
  console.log(studentForm)
}

return (
    <View style={styles.container}>
    <View style={styles.body}>
      <Text style={styles.title}>Ingresa los datos del Estudiante</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setTuition(text)}
        placeholder="Ingresa tu matricula"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setName(text)}
        placeholder="Ingresa tu nombre"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setLastName(text)}
        placeholder="Ingresa tus apellidos"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setGrade(text)}
        placeholder="Ingresa tu grado"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setAverage(text)}
        placeholder="Ingresa tu promedio"
      />
        <Button title='Guardar' onPress={add}/>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      backgroundColor: '#fff',
      width: '80%',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
      textAlign: 'center',
    },
    textInput: {
      backgroundColor: '#f0f0f0',
      height: 40,
      width: '80%',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      textAlign: 'center',
    },
    resultContainer: {
      marginTop: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
    },
    resultLabel: {
      fontSize: 16,
      marginBottom: 5,
      color: '#333',
    },
    resultText: {
      fontSize: 16,
      marginBottom: 5,
      color: '#333',
      fontWeight: 'bold',
    },
  });

export default StudentFormScreen