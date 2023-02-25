import { createStackNavigator } from '@react-navigation/stack';
import Accueil from "../screens/Acceuil";
import Profile from '../screens/Profile';
import {useAuth} from '../contexts/userContext'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { StyleSheet,Pressable } from 'react-native'
import EditProfile from '../screens/EditProfile';
import EditCategory from '../screens/EditCategory'
import AddCategory from '../screens/AddCategory';
const Stack = createStackNavigator(); 

export default function HomeStack() {
  const {currentUser} = useAuth();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={Accueil} options={({navigation})=>({ title:'Bonjour '+currentUser.name
      ,headerRight:()=>( 
        <Pressable onPress={()=>navigation.navigate('Profile')} style={styles.profile}>
          <Ionicons name="person-circle-outline" size={30} color="black" />
        </Pressable>
      )})}/>
      <Stack.Screen name="Profile" component={Profile}  options={({navigation})=>({ 
      headerRight:()=>( 
        <Pressable onPress={()=>navigation.navigate('EditProfile')} style={styles.profile}>
          <AntDesign name="edit" size={24} color="black" />
        </Pressable>
      )})}/>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditCategory" component={EditCategory} />
      <Stack.Screen name="AddCategory" component={AddCategory} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  profile:{
    marginRight:10
  }
})