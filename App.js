
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

const Stack = createStackNavigator();

const App= () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>

      <Stack.Screen name="Tab" component ={Tab}/>
       <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component ={Login}/>
      <Stack.Screen name="Profile" component ={Profile}/>
      {/* <Stack.Screen name="Home" component ={Home}/> */}

    
      <Stack.Screen name="Add User" component={AddUser}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

