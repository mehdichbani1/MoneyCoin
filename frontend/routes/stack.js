import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';

const Stack = createStackNavigator(); 

export default function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}