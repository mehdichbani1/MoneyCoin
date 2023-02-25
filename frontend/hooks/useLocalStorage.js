import React,{createContext,useState,useContext,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function useLocalStorage(key,initialValue){
  const [value,setValue]=useState(initialValue)
  const [initial,setInitial]=useState(0)
  useEffect(()=>{
    AsyncStorage.getItem(key)
    .then((v) => {
      if (v != null) {
        const u = JSON.parse(v);
        setValue(u); 
      }else{ 
        setValue(initialValue) 
        setInitial(i=>i+1)
      }
    });
  },[]) 
 
  
  async function toStorage(){   
    await AsyncStorage.setItem(key, JSON.stringify(value)) 
  }   
  useEffect(()=>{    
    if (initial >1){    
      toStorage()     
    } else{ 
      setInitial(i=>i+1)
    }  
  },[value])
     
  return [value,setValue]
}


