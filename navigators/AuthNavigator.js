import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RegisterScreen from  '../src/screens/RegisterScreen'
import LoginScreen from '../src/screens/LoginScreen';




const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          headerShown: false,
        },
      }}
    >
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Ingresar - Registrarse' }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Ingresar - Login' }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
