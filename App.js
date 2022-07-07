import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , useColorScheme, SafeAreaView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './screens/home/index';
import ProductsScreen from './screens/merchant';
import ProductScreen from './screens/product';
import Router from './navigation';

import Colors from './Colors/Colors';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
        <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backfaceVisibility:'visible',
    backgroundColor: Colors.background,
  },
});
