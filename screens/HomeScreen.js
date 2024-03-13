import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import StudentFormScreen from './StudentFormScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <Button title='Nuevo'onPress={()=> navigation.navigate('StudentFormScreen')}/>
    </View>
  )
}


export default HomeScreen
