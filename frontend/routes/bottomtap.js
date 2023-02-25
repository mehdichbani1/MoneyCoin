import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./HomeStack"
import Transactions from "./TransactionStack"
import { AntDesign,Feather,MaterialCommunityIcons } from '@expo/vector-icons';
import Statistiques from '../screens/statistiques'

const Tab = createBottomTabNavigator();
export default function Tab1() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Home" component={HomeStack}  options={{header:()=><></>,tabBarIcon:({color})=><AntDesign name="home" size={24} color={color} />}}/>
      <Tab.Screen name="Transactions" component={Transactions}  options={{header:()=><></>,tabBarIcon:({color})=><Feather name="list"  size={24} color={color} />}}/>
      <Tab.Screen name="Statistiques" component={Statistiques}  options={{tabBarIcon:({color})=><MaterialCommunityIcons name="finance" size={24} color={color} />}}/>
    </Tab.Navigator>
  );
}