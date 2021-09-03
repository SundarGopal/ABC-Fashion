import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
//import IconAntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
//import Icon from 'react-native-vector-icons/Ionicons'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
//import { NavigationBar } from '@shoutem/ui'
//import { Ionicons } from '@expo/vector-icons';
//mport {Icon} from 'react-native-elements'
Icon.loadFont()


function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Products</Text>
    </View>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to your Profile</Text>
    </View>
  );
}
function MoreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
      <Tab.Navigator>
        <Tab.Screen  name="Home" component={Home} 
        
        options={{
           tabBarLabel: 'Home',
           title:"",
           tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={25} />
           ),
         }}
         />
        <Tab.Screen name="Search" component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
           <Icon name="search" size={25}  />
          ),
        }}
        />
        <Tab.Screen name="Cart" component={CartScreen}
        options={{
           tabBarLabel: 'Cart',
           tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={25}  />
           ),
         }}
         />
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
           tabBarLabel: 'Profile',
           tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={25}/>
           ),
         }}
         />
        <Tab.Screen name="More" component={MoreScreen}
        options={{
           tabBarLabel: 'More',
           tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={25}  />
           ),
         }}
         />
      </Tab.Navigator>
  );
}