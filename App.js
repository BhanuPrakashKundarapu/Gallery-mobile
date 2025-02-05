import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import NavStack from './Navigation/NavStack';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  return (
    <View style={{flex:1}}>
      <NavStack/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
