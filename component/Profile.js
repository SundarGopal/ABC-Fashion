import React, { useState,useEffect } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Button ,ScrollView} from "react-native";

import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconIonicons from 'react-native-vector-icons/Ionicons' //ADD
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons' //ADD
import IconFontisto from 'react-native-vector-icons/Fontisto' //ADD
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons' //ADD
import IconOcticons from 'react-native-vector-icons/Octicons' //ADD
import IconFeather from 'react-native-vector-icons/Feather' //ADD
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' //ADD

IconAntDesign.loadFont()
IconIonicons.loadFont()  //ADD
IconFontisto.loadFont()  //ADD
IconMaterialIcons.loadFont()  //ADD
IconSimpleLineIcons.loadFont()  //ADD
IconOcticons.loadFont()  //ADD
IconFeather.loadFont()  //ADD
IconMaterialCommunityIcons.loadFont()  //ADD

function profile() {
    return (
       <ScrollView>
       <View style={styles.container}>
           
        <View> 
            
       
        <View style={{paddingLeft:10,paddingRight:50,paddingTop:20,borderWidth:0,flexDirection: 'row'}}> 

        <Image style={styles.profilePic} source={require('../src/ABC_Faishon/0001_fashion_image.jpg')}/>
       
       <View style={{padding:25,flex:9,borderWidth:0}}>
       <Text>EMAIL</Text>
       <Text></Text>
       <Text></Text>
       
       <TouchableOpacity style={styles.editButton}>
       <Text style={{fontWeight:'bold',color:'grey'}} >EDIT PROFILE</Text>
       </TouchableOpacity>
       </View>
        </View>
        </View>
        
        <View >
        
        <View style={styles.container2} >

        <TouchableOpacity style={styles.Clicktabs}>
         <View style={styles.leftIcon}>   
        <IconAntDesign name='bars' size ={25} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:145}}>
        <Text style={styles.text} >All My Orders</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity style={styles.Clicktabs}>
        <View style={styles.leftIcon}>   
        <IconMaterialIcons name='pending-actions' size ={25} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:110}}>
        <Text style={styles.text} >Pending Shipments</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>
        
        <Text></Text>

        <TouchableOpacity style={styles.Clicktabs}>
        <View style={styles.leftIcon}>   
        <IconMaterialCommunityIcons name='credit-card-clock-outline' size ={20} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:115}}>
        <Text style={styles.text} >Pending Payments</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity style={styles.Clicktabs}>
        <View style={styles.leftIcon}>   
        <IconSimpleLineIcons name='handbag' size ={20} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:135}}>
        <Text style={styles.text} >Finished Orders</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>
        
        </View>

        <Text></Text>
      
        <View style={styles.container2}>

        <TouchableOpacity style={styles.Clicktabs}>
        <View style={styles.leftIcon}>   
        <IconOcticons name='mail-read' size ={20} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:153}}>
        <Text style={styles.text} >Invite Friends</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <Text></Text>
        
        <TouchableOpacity style={styles.Clicktabs}>
        <View style={styles.leftIcon}>   
        <IconAntDesign name='customerservice' size ={20} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:118}}>
        <Text style={styles.text} >Customer Support</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>
        
        <Text></Text>
       
        <TouchableOpacity style={styles.Clicktabs}>
        <View style={styles.leftIcon}>   
        <IconAntDesign name='staro' size ={20} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:155}}>
        <Text style={styles.text} >Rate Our App</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <Text></Text>
        
        <TouchableOpacity style={styles.Clicktabs}>
        <View style={styles.leftIcon}>   
        <IconFeather name='edit' size ={20} color='grey'/>
        </View>
        <View style={{borderWidth:0,paddingRight:115}}>
        <Text style={styles.text} >Make a Suggestion</Text>
        </View>
        <View style={styles.rightIcon}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>
        
        </View> 
        </View>
        </View>
        </ScrollView>
    );
  }

export default profile;





const styles = StyleSheet.create({
   
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 5,
      backgroundColor:'#F5F5F5',
      width:'100%',
      paddingLeft:20,
      paddingRight:20
    },

    container2:{

        paddingLeft:0,
        borderWidth:0,
        borderRadius:10,
        backgroundColor:'white',
        
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

    icon:{
        width:20,
        height:15,
        borderRadius:200,
        borderWidth:1,
        padding:10
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



    Clicktabs :{

        padding:15,
        borderRadius:20,
        borderWidth:0,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent: 'space-evenly'
      
    },
    
    text:{
        paddingLeft:"5%",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:15
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