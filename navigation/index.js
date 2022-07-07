import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './BottomTabNavigator';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false }}>
        <Root.Screen component={BottomTabNav} name="Home" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router