import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stack1 from './routes/stack';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import AuthProvider from "./contexts/userContext"
import CategoryProvider from "./contexts/CategoryContext"
import TransactionProvider from "./contexts/TransactionContext"
import Index from './index'
export default function App() {
  
  return (
    
    <View style={styles.container}> 
      <CategoryProvider>
        <TransactionProvider>
          <AuthProvider>
            <NavigationContainer>
            <Index />
            </NavigationContainer>
          </AuthProvider>
        </TransactionProvider>
      </CategoryProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});


// abderafie