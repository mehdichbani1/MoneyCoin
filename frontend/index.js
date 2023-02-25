import { StyleSheet, Text, View } from 'react-native';
import Tab1 from './routes/bottomtap';
import { useAuth } from './contexts/userContext';
import Stack1 from './routes/stack';
export default function Index() {
  const a =""
  const {currentUser} = useAuth();
  return (
    
    <View style={styles.container}>
     {
          currentUser.id ?
          <Tab1></Tab1>:
          <Stack1></Stack1>
        } 
    </View> 
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});   
