import React,{useContext,useState,useEffect} from 'react'
import { Alert } from 'react-native';
import {useTransaction} from "./TransactionContext";
import {useCategory} from './CategoryContext'
import useLocalStorage from '../hooks/useLocalStorage';



const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}
export const initUser={
    nom: 'chbani', 
    email: "",
    password: "",
    isLogged:false,
    transactions:[],
    balance:25000,
    categories:[
      {category:{
        id:5,
        name:"shopping"
      },
      percent:70,
      restant:3000},
      {category:{
        id:5,
        name:"shopping"
      },
      percent:70,
      restant:3000},
      {category:{
        id:5,
        name:"shopping"
      },
      percent:70,
      restant:3000},
      {categories:{
        id:5,
        name:"shopping"
      },
      percent:70,
      restant:3000},
      {category:{
        id:5,
        name:"shopping"
      },
      percent:70,
      restant:3000},
    ]
}


export default function AuthProvider({children}){
    // const [currentUser, setCurrentUser] = useLocalStorage("user",initUser);
    const [currentUser, setCurrentUser] = useState(initUser);
    const {setTransactions} = useTransaction();
    const {transactions} = useTransaction();
    const {categories} = useCategory();
      const login=(user)=>{
      fetch('http://10.0.2.2:8084/api/accounts/check/'+user.email+"/"+user.password)
      .then(res=>res.json())
      .then(json=>{console.log("user ::::::"+JSON.stringify(json));setUser(json)})
      .catch((e)=>{console.log(e)})
  }
    const getUser=()=>{
      fetch('http://10.0.2.2:8084/api/accounts/'+currentUser.id)
      .then(res=>res.json())
      .then(json=>{console.log(json);setUser(json)})
      .catch((e)=>{console.log(e)})
    }
    const update=()=>{
      getUser();
    }
    const setUser=(user)=>{
      setCurrentUser(user);
      setTransaction(user)
    }
    const setTransaction=(user)=>{
      console.log("\n\n\n\n\n transactions : \n\n\n\n")
      console.log(user.budget.categories.map(i=>i.transactions).reduce((i,j)=>[...i,...j]))
      console.log("\n\n\n\n\n transactions : \n\n\n\n")
      setTransactions(user.budget.categories.map(i=>i.transactions).reduce((i,j)=>[...i,...j]))
    }

    const signUp=async(user)=>{
      return fetch('http://10.0.2.2:8084/api/accounts',{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
    })
    }
    const UpdateUser=async(user)=>{
      return fetch('http://10.0.2.2:8084/api/accounts/'+currentUser.id,{
        method: 'put',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
    })
    .then(()=>getUser())
    }

    const value ={
      login,
      currentUser,
      update,
      signUp,
      UpdateUser
  } 

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}