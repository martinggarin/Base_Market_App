import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/home';
import ProductScreen from '../screens/product';
import ProductsScreen from '../screens/merchant';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../Colors/Colors';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
          elevation:0,
          borderBottomWidth:0,
        },
        headerShadowVisible:false,
        headerTintColor: Colors.surfaceText,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}>
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
        {() => <HomeScreen />}
      </Stack.Screen>
      <Stack.Screen component={ProductsScreen} name="Merchant" />
      <Stack.Screen options={{headerTransparent:true}} component={ProductScreen} name="Product" />
    </Stack.Navigator>
  )
}

export default HomeStack