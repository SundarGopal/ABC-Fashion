
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  DrawerButton
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'; 
Icon.loadFont()
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './component/LoginScreen/Login'
import Tab from './component/Tab'
import Profile from './component/Profile'
import AddUser from './component/AddUser'
import Home from './component/Home'
import More from './component/More'
import OrderPlaced from './component/OrderPlaced'
import ProductDetails from './component/Products/ProductDetails';
import Cart from './component/Cart1';
const Stack = createStackNavigator();

const App= () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Tab" component ={Tab} options={{headerShown: false}}/> 
      
   
      <Stack.Screen name="Login" component ={Login} options={{headerShown: false}}/>

      <Stack.Screen name="ProductDetails" component ={ProductDetails} options={{headerShown: false}} />
      <Stack.Screen name="OrderPlaced" component ={OrderPlaced} options={{headerShown: false}}/>
      <Stack.Screen name="Cart1" component ={Cart} options={{headerShown: false}}/>

  

    
      <Stack.Screen name="Add User" component={AddUser} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

