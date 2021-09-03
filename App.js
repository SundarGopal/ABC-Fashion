
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './component/LoginScreen/Login'
import Home from './component/Home'
import Profile from './component/Profile'

const Stack = createStackNavigator();

const App= () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component ={Home}/>
      <Stack.Screen name="Profile" component ={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  view:{
    paddingTop:50
  },

  
});

export default App;

