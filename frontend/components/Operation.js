import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Operation({operation}) {
  return (
    <View style={styles.container}>
      <View style={styles.img}>

      </View>
      <View>
        <Text>{operation.amount}</Text>
        <Text>{operation.type}</Text>
        <Text>{operation.date}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:70,
    borderRadius:10,
    padding:10,
    flexDirection:'row',
    justifyContent:"flex-start",
    margin:10,
    backgroundColor:'#999',
    alignItems:'center'
  },
  img:{ 
    height:50,
    width:50,
    borderRadius:50,
    backgroundColor:"#333",
    marginRight:10
  }
})