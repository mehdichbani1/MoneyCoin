import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
      // {category:{
      //   id:5,
      //   name:"shopping"
      // },
      // percent:20,
      // restant:3000}
export function AccueilCategory({category}) {
  React.useEffect(()=>{
    console.log(category)
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.img}>

      </View>
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
          <View style={{flexDirection:'row',gap:3,justifyContent:"center",alignItems:'center'}}>
            <Text style={{fontSize:16,color:"blue",fontWeight:'bold',margin:5,fontSize:18}}>{category.name}</Text>
            <Text style={{fontSize:16,color:"blue",fontWeight:'bold'}}>$</Text>
            <Text style={{margin:5,fontWeight:'bold'}}>{category.amount}</Text>
          </View>
          <View>
            <Text>{100}%</Text>
          </View>
        </View>
          <View style={styles.bar}>
            <View style={[styles.innerBar,{width:'100%'}]}/>
          </View>
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
    margin:10,
    backgroundColor:'white',
    alignItems:'center'
  },
  img:{ 
    height:50,
    width:50,
    borderRadius:50,
    backgroundColor:"#333",
    marginRight:10
  },
    bar:{
    height:10,
    width:"100%",
    backgroundColor:'gray'
  },
  innerBar:{
    height:10,
    backgroundColor:'blue'
  }
})