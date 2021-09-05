import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Profile from './Profile'
import More from './More'
import OrderPlaced from './OrderPlaced'
import Cart from './Cart1'

Icon.loadFont()

import SearchScreen from './SearchScreen/SearchScreen';




const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
      <Tab.Navigator backBehaviour = "initialRoute">
        <Tab.Screen  name="Home" component={Home} 
        
        options={{
           tabBarLabel: 'Home',
           title:"",
           tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={25} />
           ),
            headerShown: false
         }
         
         }
         />
        <Tab.Screen name="Search" component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
           <Icon name="search" size={25}  />
          ),
          headerShown: false
        }}
        />
        <Tab.Screen name="Cart" component={Cart}
        options={{
           tabBarLabel: 'Cart',
           tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={25}  />
           ),
           headerShown: false
         }}
         />
        <Tab.Screen name="Profile" component={Profile} 
        options={{
           tabBarLabel: 'Profile',
           title:"",
           tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={25}/>
           ),
           headerShown: false
         }}
         />
        <Tab.Screen name="More" component={More}
        options={{
           tabBarLabel: 'More',
           title:"",
           tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={25}  />
           ),
           headerShown: false
         }}
         />
      </Tab.Navigator>
  );
}