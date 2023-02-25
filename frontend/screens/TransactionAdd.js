import React from 'react';
import { View, TextInput, Button,Text,StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import OptionModal from "../components/OptionModal"
import { useAuth } from '../contexts/userContext';
import { useTransaction } from '../contexts/TransactionContext';
const TransactionSchema = Yup.object().shape({
  amount: Yup.string().matches(
    /^[0-9]+$/,
  "the field must be a number").required('Required'),
  typeTransaction: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
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
const myDate =(new Date).toISOString().split('T')[0].toString()
const AddTransactionForm = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const {addtransaction} = useTransaction()
  const {currentUser,update} = useAuth();
  const submit=(values,formsProps)=>{
    console.log(values)
    addtransaction(values) 
    .then(res=>{
      console.log("transaction added")
      formsProps.resetForm();
      update()
      navigation.navigate("Transaction")
    })
    .catch(()=>Alert.alert("hello","error occured"))
  }
  return (
    <View style={{flex:1,padding:10}}>
    <Formik
      initialValues={{ amount: '', typeTransaction: '',category:null,description: '',date:'' }}
      validationSchema={TransactionSchema}
      onSubmit={(values,formProps) => {
        console.log(myDate)
        const v = {...values,['category']:{id:parseInt(values.category)},['date']:myDate};
        const catAmount = currentUser.budget.categories.filter(i=>i.id==parseInt(values.category))[0].amount
        console.log(catAmount)
        if(v.typeTransaction=="RETRAIT" && catAmount < v.amount){
          Alert.alert("MoneyCoin","Ahya fin ghadi,Rje3 bhalek");
        }else{
          submit(v,formProps)

        }
      }} // replace with actual form submission
    >
      {(props) => (
        <View>
          <MyInput formProps={props} field="description" header='Description *'
            />
          <MyInput formProps={props} field="amount" header='Amount *'
            placeholder="$0"
            keyboardType="numeric"/>
          <Text style={styles.header}>Type</Text>
          <OptionModal 
            data={['RETRAIT','VERSEMENT']} 
            onChange={props.handleChange("typeTransaction")}
            value={props.values.typeTransaction}
          />
          <Text style={styles.errText}>{props.touched['type']&&props.errors['type']}</Text>
          <Text style={styles.header}>Category</Text>
          <OptionModal 
            data={[...currentUser.budget.categories.map(i=>i.name)]} 
            onChange={cat=>{
              const a = currentUser.budget.categories.filter(c=>c.name==cat)[0].id
              console.log(a)
              props.handleChange("category")(a.toString())
            }}
            value={props.values.category==null?'':currentUser.budget.categories.filter(c=>c.id.toString()==props.values.category)[0].name}
          />
          <Text style={styles.errText}>{props.touched['category']&&props.errors['category']}</Text>
          <View style={styles.submit}>
          <Button onPress={props.handleSubmit} title="Add Transaction" />
          </View>
        </View>
      )}
    </Formik>
    </View> 
  );
};

export default AddTransactionForm;


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
  submit:{
    marginVertical:10
  }
}) 