import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React from 'react'
import {useCategory} from '../contexts/CategoryContext'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../contexts/userContext';



const TransactionSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
});


const MyInput=(props)=>(

    <View>
      <Text style={styles.header}>{props.header}</Text>
      <TextInput 
      style={[styles.input,{borderColor:props.formProps.isSubmitting&&props.formProps.errors[props.field]?"red":"black"}]}
      onChangeText={props.formProps.handleChange(props.field)}
      value={props.formProps.values[props.field]}
      onBlur={props.formProps.handleBlur(props.field)}
      {...props}
      
      />
      <Text style={styles.errText}>{props.formProps.touched[props.field]&&props.formProps.errors[props.field]}</Text>
    </View>
)

export default function AddCategory({navigation}) {
    const {selectedCategory} = useCategory();
    const {currentUser,update} = useAuth();
    const {addCategory} = useCategory();


    const submit=(values,formProps)=>{
      console.log(values)
      addCategory(values)
      .then(res=>{console.log('add Category');formProps.resetForm();update();
      navigation.navigate("Accueil")
    })
      .catch(e=>console.log(e))
    }
  return (
    <View style={{flex:1,padding:10}}>
    <Formik
      initialValues={{ name:selectedCategory.category.name,amount:0,budget:{ 
        id:currentUser.budget.id
      } }}
      validationSchema={TransactionSchema}
      onSubmit={submit} // replace with actual form submission
    >
      {(props) => (
        <View>
          <MyInput formProps={props} field="name" header='Name *' 
            keyboardType="Text"/>
          {/* <Text style={styles.restant}>Amount : ${0}</Text>           */}
          <Button onPress={props.handleSubmit} title="Add category" />
        </View>
      )}
    </Formik>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    borderBottomColor: '#606ec9', 
    borderBottomWidth: 1,  
    backgroundColor: '#CBDCF7',
    paddingHorizontal:6,
    paddingVertical:10, 
    fontSize:16
  },
  errText:{
    color:'red',
    textAlign:"center",
    fontSize:15
  },
  header:{
    fontWeight:'bold',
    fontSize:14,
    paddingLeft:14
  },
  restant:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    marginVertical:10
  }
}) 