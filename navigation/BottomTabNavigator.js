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
            showLabel: false,
            inactiveTintColor: '#ffbd7d',
            activeTintColor: 'black',
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
