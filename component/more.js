import React, { useState,useEffect } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,ScrollView} from "react-native";

import { useNavigation } from '@react-navigation/core';
import {Icon, Badge} from 'react-native-elements';

import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconIonicons from 'react-native-vector-icons/Ionicons' //ADD
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons' //ADD
import IconFontisto from 'react-native-vector-icons/Fontisto' //ADD
import IconFontAwesome from 'react-native-vector-icons/FontAwesome' //ADD

IconAntDesign.loadFont()
IconIonicons.loadFont()  //ADD
IconFontisto.loadFont()  //ADD
IconMaterialIcons.loadFont()  //ADD
IconFontAwesome.loadFont() //ADD

function More() {
    
  let navigation = useNavigation();
  return (
    

      <ScrollView>
    <View style={{borderWidth:0,justifyContent:'space-between',alignItems:'center',height:90,flexDirection:'row',paddingTop:50}}>
    
    <TouchableOpacity onPress={()=>{navigation.navigate('Home',{})}}>
    <IconAntDesign name='left' size ={30} color='red' style={{paddingRight:50,marginLeft:10,borderWidth:0}}/>
    </TouchableOpacity>
    <View style={{alignItems:'flex-end',paddingTop:0,borderWidth:0}}>
        <View>
        <TouchableOpacity>
        <View style={{ paddingRight:20}}>
        <IconAntDesign name='shoppingcart' size ={30} color='black'/>
        <Badge value="5" status="error" containerStyle={{ position: 'absolute', top:0, right:10 }} />
        </View>
        </TouchableOpacity>
        </View>
        </View>
    </View>

       <View style={styles.container}>
        
      
        <Text style={{fontSize:50,fontWeight: 'bold',color: '#45535B',paddingTop:10}}>More</Text>
        
        <Text></Text>
        <Text></Text>
       
        <View style={styles.container2} >

        <TouchableOpacity style={styles.Clicktabs}>
         <View style={styles.leftIcon}>   
        <IconMaterialIcons name='local-shipping' size ={20} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:120}}>
        <Text style={styles.text} >Shipping Address</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Clicktabs}>
         <View style={styles.leftIcon}>   
        <IconMaterialIcons name='payment' size ={20} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:120}}>
        <Text style={styles.text} >Payment Method</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Clicktabs}>
         <View style={styles.leftIcon}>   
        <IconAntDesign name='wallet' size ={20} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:150}}>
        <Text style={styles.text} >Currency</Text>
        </View>
        <View>
        <Text style={{color:'grey'}} >USD</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Clicktabs}>
         <View style={styles.leftIcon}>   
        <IconFontAwesome name='language' size ={20} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:125}}>
        <Text style={styles.text}>Language</Text>
        </View>
        <View>
        <Text style={{color:'grey'}}>English</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>
        
        </View>
        
        <View style={{paddingTop:70}} >

      <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>{navigation.navigate('Login',{})}}>
        <Text style={{color:'red'}}>LOG OUT</Text>
      </TouchableOpacity>

        </View>
        </View>
        </ScrollView>     
    );
  }

export default More;





const styles = StyleSheet.create({
   
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 5,
      backgroundColor:'#F5F5F5',
      width:'100%',
      paddingLeft:20,
      paddingRight:20,
      borderWidth:0
    },

    container2:{

        paddingLeft:0,
        borderWidth:0,
        borderRadius:10,
        backgroundColor:'white'

    },

    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:20,
      width:365,
      height:150
      
    },

    editButton:{

        borderWidth:1,
        borderRadius:50,
        alignItems: 'center',
        padding:10,
        borderColor:'grey'
    },


    profilePic:{
        width:110,
        height:110,
        borderRadius:200,

    },

    Clicktabs :{

      padding:15,
      borderRadius:20,
      borderWidth:0,
      backgroundColor: 'white',
      flexDirection:'row',
      justifyContent: 'space-evenly'
    
  },
    
    text:{
        paddingLeft:"0%",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:15
    },

    leftIcon: {
      borderWidth:0,
      alignItems:'flex-start',
      flex:1
    },

    rightIcon: {
      paddingLeft:0,
      flex:1,
      borderWidth:0,
      alignItems:'flex-end'
    },

   
    button: {
      alignItems: "center",
      backgroundColor: "#ff8100",
      padding: 10,
      borderRadius: 10,
      width:200,
      marginLeft:90
    },
  });



  // npm i react-native-vector-icons

  //