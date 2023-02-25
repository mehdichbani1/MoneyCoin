import { StyleSheet, Text, View,Button,ScrollView,Pressable } from 'react-native'
import React from 'react'
import {useAuth} from '../contexts/userContext'
import {useCategory} from '../contexts/CategoryContext'
import {AccueilCategory} from '../components/Category'
import OptionModal from '../components/OptionModal'
import { AntDesign } from '@expo/vector-icons';


export default function Accueil({navigation}) {
  const [item,setitem]=React.useState(0)
  const [open,setOpen]=React.useState(0)
  const {currentUser} = useAuth();
  const {setSelectedCategory} = useCategory();
  React.useEffect(()=>{
    console.log(currentUser.budget.categories)
  },[])
  return (
    <View style={{flex:1}}>
      <View style={styles.balance}>
          <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center'}}>
            <Text style={{fontSize:16,color:"blue",fontWeight:'bold'}}>$</Text>
            <Text style={{margin:7,fontWeight:'bold'}}>{currentUser.budget.amount}</Text>
            <Text style={{color:'gray'}}>restant</Text>
          </View>
          <View style={styles.bar}>
            <View style={[styles.innerBar,{width:'90%'}]}/>
          </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:7}}>
        <Text style={styles.categories}>Categories({currentUser.budget.categories.length})</Text>
        <Pressable onPress={()=>navigation.navigate('AddCategory')} style={styles.profile}>
            <AntDesign name="plus" size={24} color="black" />
        </Pressable>
      </View> 
      <ScrollView> 
      {currentUser.budget.categories.map((i,k)=>(
        <Pressable onLongPress={()=>{setOpen(o=>o+1);setitem(k)}}  key={k}>
          <AccueilCategory category={i}/>
        </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}
      {/* 
      <OptionModal withouttext={true} data={['Edit']}  open={open} onChange={(v)=>{
        if(v=='Edit'){
          setSelectedCategory(currentUser.budget.categories[item]);
          navigation.navigate('EditCategory');
        }
      }}/> */}
const styles = StyleSheet.create({
  // balance:{
  //   backgroundColor: 'white',
  //   elevation: 5, 
  //   // shadowColor: '#999',
  //   // shadowOpacity: 0.7,
  //   // shadowRadius: 3,
  //   margin:10,
  //   padding:10,
  //   borderRadius:7,
  //   paddingVertical:20
  // },
  // bar:{
  //   height:10,
  //   // width:"100%",
  //   backgroundColor:'gray'
  // },
  // innerBar:{
  //   height:10,
  //   backgroundColor:'blue'
  // },
  // categories:{
  //   margin:10,
  //   fontSize:18,
  //   fontWeight:"bold"
  // }
})

      // <ScrollView> 
      //   {operations.map((i,k)=><Operation key={k} operation={i}/>)}

      // </ScrollView>