import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useAuth} from '../contexts/userContext'




const Login = () => {
  const {login,currentUser} = useAuth()
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    login({
    email: email,
    password: password,
    })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text>{currentUser.nom}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  inputContainer: {
    width: '100%',
    padding: 10
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    width: '100%'
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    width: '80%',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#f4511e'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});