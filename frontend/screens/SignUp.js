import React from 'react';
import { View, TextInput, Button,Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';
import { useAuth } from '../contexts/userContext';

const AccountSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(
    /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
    'Invalid phone number'
  ).required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  country: Yup.string().required('Required'),
});

const AccountCreationForm = ({navigation}) => {
  const {signUp} = useAuth();
  return (
    <Formik
      initialValues={{  name:'',email: '', phone: '', password: '', passwordConfirmation: '', country: '' }}
      validationSchema={AccountSchema}
      onSubmit={(values,formProps) =>{
        signUp(values)
        .then(()=>{
          formProps.resetForm();
          navigation.navigate("Login");
        })
      }} // replace with actual form submission
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={{padding:20}}>
        <Text style={styles.title}>Email</Text>
          <TextInput style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        <Text style={styles.title}>Name</Text>
          <TextInput style={styles.input}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          <Text style={styles.error}>{touched.email && errors.email}</Text>
        <Text style={styles.title}>Phone Number</Text>
          <TextInput style={styles.input} 
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            keyboardType="phone-pad"
          />
          <Text style={styles.error}>{touched.phone && errors.phone}</Text>
        <Text style={styles.title}>Password</Text>

          <TextInput style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          <Text style={styles.error}>{touched.password && errors.password}</Text>
        <Text style={styles.title}>Confirm Password</Text>

          <TextInput style={styles.input}
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={handleBlur('passwordConfirmation')}
            value={values.passwordConfirmation}
            secureTextEntry
          />
          
            <Text style={styles.error}>{touched.passwordConfirmation && errors.passwordConfirmation}</Text>
        <Text style={styles.title}>Country</Text>

          <TextInput style={styles.input}
            onChangeText={handleChange('country')}
            onBlur={handleBlur('country')}
            value={values.country}
          />
          <Text style={styles.error}>{touched.country && errors.country}</Text>
          <View style={styles.buttonText}>
          <Button onPress={handleSubmit} title="Create Account" />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default AccountCreationForm;

const styles = StyleSheet.create({

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5, 
    width: '100%'
  },
  buttonText: {
  marginVertical:20
  },
  error:{
    color:'red', 
    textAlign:'center'
  },
  title:{
    marginTop: 10,
    fontSize:16
  }
});

