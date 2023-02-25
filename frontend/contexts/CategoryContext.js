import React,{useContext,useState,useEffect} from 'react'
import { Alert } from 'react-native';
const CategoryContext = React.createContext();


export function useCategory(){
    return useContext(CategoryContext);
}
const category={
    id:5,
    name: "Shopping"
}


export default function CategoryProvider({children}){
    const [categories, setCategories] = useState([category,category,category,category,category]);
    const [selectedCategory,setSelectedCategory]=useState({category:{
        id:5,
        name:"shopping"
      },
      percent:70,
      restant:3000});
  
    const addCategory= async (category)=>{
        return fetch('http://10.0.2.2:8084/api/categories',{
                method: 'post', 
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(category)
            })
    }


 


    const value ={
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        addCategory
    }

    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    )
} 