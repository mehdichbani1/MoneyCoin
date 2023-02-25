import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {useTransaction} from '../contexts/TransactionContext'
import { AntDesign } from '@expo/vector-icons';
import Transaction from '../components/Transaction'
import { useAuth } from '../contexts/userContext';





export default function Transactions() {
  const {transactions} = useTransaction();
  return (
    <View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
        {transactions.map((i,k)=><Transaction key={k} transaction={i}/>)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

})

