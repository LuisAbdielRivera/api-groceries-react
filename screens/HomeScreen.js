import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { studentForm } from './StudentFormScreen';

const HomeScreen = ({ navigation }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
            }, 1000);
        });

    const deleteStudent = (index) => {
        studentForm.splice(index, 1);
        setCount(count)
        console.log(studentForm)
    }

  return (
    <View style={styles.container}>
            <Button title='Nuevo Estudiante' onPress={() => navigation.navigate('StudentFormScreen')} color='#007bff' />
            <View style={styles.studentList}>
                {studentForm.map((student, index) => (
                    <View key={index} style={styles.studentItem}>
                        <Text style={styles.label}>Matrícula: {student.tuition}</Text>
                        <Text style={styles.label}>Nombre: {student.name}</Text>
                        <Text style={styles.label}>Apellido: {student.lastName}</Text>
                        <Text style={styles.label}>Grado: {student.grade}</Text>
                        <Text style={styles.label}>Promedio: {student.average}</Text>
                        <View style={styles.buttonContainer}>
                            <Button title='Editar' onPress={() => { navigation.navigate("EditStudentFormScreen", { student, index }) }} color='#28a745' />
                            <Button title='Eliminar' onPress={() => deleteStudent(index)} color='#dc3545' />
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    studentList: {
        marginTop: 20,
    },
    studentItem: {
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ced4da',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#495057',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default HomeScreen;
