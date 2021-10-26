import React from 'react';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Carrinho from './src/telas/carrinho/index'
import Login from './src/telas/home/Login';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
      /* Retirar nome */
      screenOptions={{
        headerShown: false
      }}
    >

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="principal" component={Carrinho} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack /> 
    </NavigationContainer>
  );
}

