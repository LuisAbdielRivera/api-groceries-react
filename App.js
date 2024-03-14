import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudentFormScreen from './screens/StudentFormScreen.js'
import HomeScreen from './screens/HomeScreen.js'
import EditStudentFormScreen from './screens/EditStudentFormScreen.js'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='StudentFormScreen' component={StudentFormScreen}/>
        <Stack.Screen name='EditStudentFormScreen' component={EditStudentFormScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
