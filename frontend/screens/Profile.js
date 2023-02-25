import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useAuth} from '../contexts/userContext'
export default function Accueil() {
    const {currentUser} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.item}>
          <View style={styles.key}>
            <Text style={styles.key1}>name :</Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.value1}>{currentUser.name}</Text>
          </View>
      </View>
      <View style={styles.item}>
          <View style={styles.key}>
            <Text style={styles.key1}>email :</Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.value1}>{currentUser.email}</Text>
          </View>
      </View>
      <View style={styles.item}>
          <View style={styles.key}>
            <Text style={styles.key1}>phone :</Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.value1}>{currentUser.phone}</Text>
          </View>
      </View>
      <View style={styles.item}>
          <View style={styles.key}>
            <Text style={styles.key1}>actual Budget :</Text>
          </View>
          <View style={styles.value}>
            <Text style={styles.value1}>{currentUser.budget.amount}</Text>
          </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    color:'gray'
  },
  item:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:"100%",
    padding:10
  },
  key1:{
    fontSize:20
  },
  value1:{
    fontSize:18,
    color:'blue'
  }
})