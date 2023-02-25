import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useAuth} from '../contexts/userContext'
export default function Home({navigation}) {
  const {currentUser} = useAuth();

    return (
        <View style={styles.container}>
        <Text>{currentUser.nom}</Text>
           <View style={styles.buttonContainer}>
           <View style={styles.buttonWrapper}>
             <Button
              style={styles.button}
                title="Login"
                onPress={() => navigation.navigate('Login')}
              />
              </View>
              <View style={styles.buttonWrapper}>
              <Button
              style={styles.button}
                title="Signup"
                onPress={() => navigation.navigate('Signup')}
              />
              </View>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        width: '100%',
    },
    button: {
        width: 150,
        height: 50,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#f4511e',
        alignSelf: 'center'
    },
    buttonWrapper: {
        width: 150,
        height: 50,
    }
});

