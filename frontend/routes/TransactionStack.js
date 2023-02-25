import { createStackNavigator } from '@react-navigation/stack';
import Transaction from "../screens/Transactions";
import TransactionAdd from '../screens/TransactionAdd';
import { StyleSheet,Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {useTransaction} from '../contexts/TransactionContext'
import { useAuth } from '../contexts/userContext';
const Stack = createStackNavigator(); 

export default function HomeStack() {
  const {transactions} = useTransaction();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transaction" component={Transaction} options={({navigation})=>({ title:`Transactions (${transactions.length})`
      ,headerRight:()=>( 
        <Pressable onPress={()=>navigation.navigate('AddTransaction')} style={styles.profile}>
          <AntDesign name="plus" size={24} color="black" />
        </Pressable>
      )})}/> 
      <Stack.Screen name="AddTransaction" component={TransactionAdd}  options={()=>({ title:'Add a transaction'})}/>
    </Stack.Navigator>
  );
}
{/* <Stack.Screen name="Transaction" component={Transaction} options={({navigation})=>({ title:`Transactions (${currentUser.budget.categories.transactions.length})` */}


const styles = StyleSheet.create({
  profile:{
    marginRight:10
  }
})