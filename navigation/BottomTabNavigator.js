import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile';
import HomeScreen from '../screens/home';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../Colors/Colors';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {

    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarInactiveTintColor: 'grey',
            tabBarActiveTintColor: Colors.backgroundText,
            headerShown:false,
            tabBarStyle:{
                backgroundColor:'black',
                borderColor:Colors.surface,
                borderTopWidth:0,
            },
      }}>
      <Tab.Screen
        component={HomeStack}
        name="home"
        options={{
            showLabel:false,
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        component={ProfileScreen}
        name="profile"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="person" color={color} size={30} />
          ),
        }}
      />
      </Tab.Navigator>

    );
};

export default BottomTabNav;
