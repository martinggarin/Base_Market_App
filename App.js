import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , useColorScheme, SafeAreaView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './screens/home';
import Colors from './Colors/Colors';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.container} barStyle={'dark-content'} />
      <Home>
        
      </Home>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backfaceVisibility:'visible',
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
