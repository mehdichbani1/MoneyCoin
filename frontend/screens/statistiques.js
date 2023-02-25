import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import {useAuth} from '../contexts/userContext'
import { MaterialIcons } from '@expo/vector-icons';
export default function Statistiques() {
  const [percent,setPercent]= React.useState(50);
  const [lastItem,setLastItem]= React.useState(0);
  const [data,setData]= React.useState([
    {percent:50,month:'Jan'},
    {percent:20,month:'Fev'},
    {percent:60,month:'Mars'},
    {percent:90,month:'Avr'},
    {percent:40,month:'Avr'},
    {percent:70,month:'Avr'},
    {percent:60,month:'Mars'},
    {percent:90,month:'Avr'},
    {percent:40,month:'Avr'},
    {percent:70,month:'Avr'},
    {percent:60,month:'Mars'},
    {percent:90,month:'Avr'},
    {percent:40,month:'Avr'},
    {percent:70,month:'Avr'},
    {percent:15,month:'Mars'},
    {percent:25,month:'Avr'},
    {percent:30,month:'Avr'},
    {percent:20,month:'Avr'},
  ])
  React.useEffect(()=>{
    setLastItem(data.length);
  },[data]);
  React.useEffect(()=>{
    const d = data.filter((i,k)=>k>=lastItem-5 && k < lastItem).map(i=>i.percent)
    if(d.length>0)
    setPercent(d.reduce((i,j)=>i+j)/d.length)
  },[lastItem])
  const reduce=()=>{
    if(lastItem-10>0){
      setLastItem(l=>l-1); 
    }else if(lastItem-5>0){
      setLastItem(5)
    }
    // }else if (lastItem>0){
    //   setLastItem(0);
    // }
  }
  const add=()=>{
    if(lastItem<data.length-5){
      setLastItem(l=>l+1)
      }else if(lastItem < data.length){
        setLastItem(data.length)
      }
  }
    const {currentUser} = useAuth();
  return (
    <View>
      <View style={styles.balance}>
          <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center'}}>
            <Text style={{fontSize:16,color:"blue",fontWeight:'bold'}}>$</Text>
            <Text style={{margin:7,fontWeight:'bold'}}>{currentUser.balance}</Text>
            <Text style={{color:'gray'}}>restant</Text>
          </View>
          <View style={styles.bar}>
            <View style={[styles.innerBar,{width:'90%'}]}/>
          </View>
      </View>
      <View style={styles.container}>
        <View style={[styles.line,{bottom:percent}]}/>
        {data.filter((i,k)=>k>=lastItem-5 && k < lastItem).map((i,k)=>(
        <View style={[{width:"12%",height:i.percent+'%'},styles.itemContainer]}>
        <View style={[styles.item,{height:'100%'}]} key={k}>
          <View style={[styles.innerItem,{height:percent}]}/>

        </View>
        <View style={styles.month}> 
          <Text>{i.month}</Text>
        </View>
        <View style={styles.percent}> 
          <Text>{i.percent}%</Text>
        </View>
        </View>
        ))}
        <Pressable style={styles.next} onPress={add}>
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.previous} onPress={reduce}>
          <MaterialIcons name="navigate-next" size={24} color="black" /> 
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  balance:{
    backgroundColor: 'white',
    elevation: 5, 
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#999',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    margin:10,
    padding:10,
    borderRadius:7,
    paddingVertical:20
  },
  bar:{
    height:10,
    width:"100%",
    backgroundColor:'gray'
  },
  innerBar:{
    height:10,
    backgroundColor:'blue'
  },
  container:{
    borderBottomWidth:2,
    borderBottomColor:'blue',
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-evenly',
    margin:10,
    height:100,
    position:'relative'
  },
  item:{
    borderWidth:2,
    borderBottomWidth:0,
    borderColor:'blue',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor:'white',
    position:'relative',
    overflow:'hidden',
    width:'100%'
  },
  itemContainer:{
    flexDirection:"column",
    alignItems:'center',
  },
  line:{
    borderStyle:'dashed',
    borderWidth:1,
    position:'absolute',
    width:'100%',
    zIndex:20,
    left:0
  },
    month:{
    position:'absolute',
    bottom:-25
  },
    percent:{
    position:'absolute',
    top:-25
  },
  innerItem:{
    width:"100%",
    backgroundColor:'gray',
    position:'absolute',
    bottom:-1,
    margin:0,

  },
  next:{
    position:'absolute',
    bottom:-30,
    right:0
  },
  previous:{
    position:'absolute',
    bottom:-30,
    left:0,
    transform:[{ rotate: '180deg'}]
  },
}) 