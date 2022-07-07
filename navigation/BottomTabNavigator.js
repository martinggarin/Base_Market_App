import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile';
import HomeScreen from '../screens/home';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../Colors/Colors';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {

    return (
        <Tab.Navigator
        screenOptions={{
            showLabel: false,
            inactiveTintColor: '#ffbd7d',
            activeTintColor: 'black',
            headerShown:false,
            tabBarStyle:{
                backgroundColor:Colors.surface,
                borderColor:Colors.surface,
                borderTopWidth:0
            },
      }}>
      <Tab.Screen
        component={HomeScreen}
        name="home"
        options={{
            showLabel:false,
            backgroundColor:Colors.background,
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ProfileScreen}
        name="profile"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="person" color={color} size={25} />
          ),
        }}
      />
      </Tab.Navigator>

    );
};

export default BottomTabNav;