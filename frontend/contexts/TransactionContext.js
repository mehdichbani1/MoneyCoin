import React,{useContext,useState,useEffect} from 'react'
import { Alert } from 'react-native';
const TransactionContext = React.createContext();
export const transState={
  input:'VERSEMENT',
  ouput:'RETRAIT'
}

export function useTransaction(){
    return useContext(TransactionContext);
}



export default function TransactionProvider({children}){
    const [transactions, setTransactions] = useState([]);

    
    const addtransaction=async(transaction)=>{
            console.log(transaction)
        return fetch('http://10.0.2.2:8084/api/transactions',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(transaction)
        })
}











    const value ={
        transactions,
        setTransactions,
        addtransaction
    }


    

    return (
        <TransactionContext.Provider value={value}>
            {children}
        </TransactionContext.Provider>
    )
}