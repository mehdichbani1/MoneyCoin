import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TouchableOpacity, View,ScrollView,Pressable} from 'react-native';

const App = ({data,onChange,value,withouttext,open}) => {
  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(()=>{
    if(open!=null && open!=0){
      setModalVisible(true)
    }
  },[open])
  return (
    <>
      {!withouttext&&<Text onPress={()=>setModalVisible(true)} style={styles.textBtn}>{value!=''?value:"choose an item"}</Text>}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView} >
        <Pressable style={styles.opacity}  onPress={()=>{setModalVisible(false)}}/>
          <View style={styles.modalView}>
          <ScrollView >
            {data.map((i,k)=>(
              <TouchableOpacity key={k}
              onPress={() => {onChange(i);setModalVisible(false);console.log("selected item :"+i)}}>
              <Text style={styles.textStyle}>{i}</Text>
            </TouchableOpacity>
            ))}
          </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent:'center',
  },
  modalView: { 
    marginHorizontal:20,
    backgroundColor:"white",
    marginVertical:70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2, 
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity:1,
    paddingVertical:15 
  },
  textStyle:{
    padding:5,
    fontSize:18,
    textAlign:'center'
  },
    textBtn:{
    textAlign:'center',
    color:'#3497e9',
    fontSize:16,
  },
  opacity:{
    position:'absolute',
    backgroundColor:'#aaa',
    height:'100%',
    width:'100%',
    opacity:0.3
  }

});

export default App;