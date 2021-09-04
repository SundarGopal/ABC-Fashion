import React, { useState,useEffect } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Button} from "react-native";

//import IconAntDesign from 'react-native-vector-icons/AntDesign'

function More() {
    return (
       <View style={styles.container}>
        
        <View style={{paddingLeft:10,paddingRight:50,paddingTop:0,borderWidth:0,flexDirection: 'row'}}> 
        
        </View>
        
        <Text style={{fontSize:50,fontWeight: 'bold',color: '#45535B',paddingTop:10}}>More</Text>
        <View >
        
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <View style={styles.container2} >

        <TouchableOpacity style={styles.Clicktabs}>
        <Text style={styles.text} >Shipping Address</Text>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity style={styles.Clicktabs}>
        
        <Text style={styles.text} >Payment Method</Text>
        </TouchableOpacity>
        
        <Text></Text>
        
        <TouchableOpacity style={styles.Clicktabs}>
        <Text style={styles.text} >Currency</Text>
        </TouchableOpacity>

        <Text></Text>
        
        <TouchableOpacity style={styles.Clicktabs}>
        <Text style={styles.text} >Language</Text>
        </TouchableOpacity>
        
        </View>

      <Button title = "LOG OUT" fontSize = '30' color ='' ></Button>

        </View>
        
        </View>
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
      paddingRight:20
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
        flexDirection:'row'
    },
    
    text:{
        paddingLeft:"0%",
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