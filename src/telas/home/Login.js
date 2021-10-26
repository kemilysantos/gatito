import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {View } from 'react-native';
import {Image, TextInput, Text, Pressable} from 'react-native';
import estilos from './estilos';



export default function Login({navigation}) {
  let [email, setEmail] = useState("");
  let [password,setPassword] = useState("")

  const  entrar =() => {
    navigation.reset({
        index:0,
        routes:[{name:'principal'}]

    });
   
  }
  return (
    <View style={estilos.page}>
      <Text h2 style={estilos.login__logomarca}>Gatito PetShop</Text>
      <TextInput style={estilos.login__input}
        placeholder="E-mail" 
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <TextInput style={estilos.login__input} 
        placeholder="Senha" 
        onChangeText={value => setPassword(value)}
        secureTextEntry = {'true'}
      />
      <Pressable style={estilos.button} onPress = {() => entrar()}>
        <Text style={estilos.textbutton}>
          Entrar
        </Text>
      </Pressable>
    </View >
    
  );
}


