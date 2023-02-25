import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {transState} from "../contexts/TransactionContext"
export default function Transaction({transaction}) {
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.detail}>
        <Text style={styles.name}>{transaction.description}</Text>
        <Text style={styles.date}>{transaction.date.toString()}</Text>
      </View>
      <View>
        <Text style={[{color:transaction.typeTransaction==transState.input?"green":"red"},styles.amount]}>
        {transaction.typeTransaction==transState.input?"+":"-"}${transaction.amount}
        </Text>
      </View>
    </View>
    <View style={styles.line}/>
  </View>
  )
}

const styles = StyleSheet.create({
  amount:{
    fontSize:18
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    padding:15
  },
  name:{
    fontSize:17,
    marginBottom:7
  },
  date:{
    color:'gray'
  },
  line:{
    height:2,
    backgroundColor:'gray',
    marginHorizontal:10
  },
detail:{
  flexDirection:'column',
  justifyContent:'space-around',
  
}
})