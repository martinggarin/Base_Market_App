import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/home';
import ProductScreen from '../screens/product';
import ProductsScreen from '../screens/merchant';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
        {() => <HomeScreen />}
      </Stack.Screen>
      <Stack.Screen component={ProductsScreen} name="Merchant" />
      <Stack.Screen component={ProductScreen} name="Product" />
    </Stack.Navigator>
  )
}

export default HomeStack