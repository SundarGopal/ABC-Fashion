import React, { useState,useEffect } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Button} from "react-native";

import IconAntDesign from 'react-native-vector-icons/AntDesign'

IconAntDesign.loadFont()

function profile() {
    return (
       <View style={styles.container}>
           
        <View> 
            
       
        <View style={{paddingLeft:10,paddingRight:50,paddingTop:20,borderWidth:1,flexDirection: 'row'}}> 

        <Image style={styles.profilePic} source={require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0001_fashion_image.jpg')}/>
       
       <View style={{padding:8,flex:8,borderWidth:1,width:80}}>
       <Text>fashionparade@gmail.com</Text>
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
         <View style={{borderWidth:1}}>   
        <IconAntDesign name='bars' size ={20} color='grey'/>
        </View>
        <Text style={styles.text} >All My Orders</Text>
        <View style={{paddingLeft:200}}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity style={styles.Clicktabs}>
        <View style={{borderWidth:1}}>   
        <IconAntDesign name='bars' size ={20} color='grey'/>
        </View>
        <Text style={styles.text} >Pending Shipments</Text>
        <View style={{paddingLeft:160,borderWidth:0}}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>
        
        <Text></Text>

        <TouchableOpacity style={styles.Clicktabs}>
        <View style={{borderWidth:1}}>   
        <IconAntDesign name='bars' size ={20} color='grey'/>
        </View>
        <Text style={styles.text} >Pending Payments</Text>
        <View style={{paddingLeft:165,borderWidth:0}}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity style={styles.Clicktabs}>
        <View style={{borderWidth:1}}>   
        <IconAntDesign name='bars' size ={20} color='grey'/>
        </View>
        <Text style={styles.text} >Finished Orders</Text>
        <View style={{paddingLeft:185,borderWidth:0}}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>
        
        </View>

        <Text></Text>
      
        <View style={styles.container2}>

        <TouchableOpacity style={styles.Clicktabs}>
        <View style={{borderWidth:1}}>   
        <IconAntDesign name='bars' size ={20} color='grey'/>
        </View>
        <Text style={styles.text} >Invite Friends</Text>
        <View style={{paddingLeft:200}}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <Text></Text>
        
        <TouchableOpacity style={styles.Clicktabs}>
        <View style={{borderWidth:1}}>   
        <IconAntDesign name='bars' size ={20} color='grey'/>
        </View>
        <Text style={styles.text} >Customer Support</Text>
        <View style={{paddingLeft:165}}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>
        
        <Text></Text>
       
        <TouchableOpacity style={styles.Clicktabs}>
        <View style={{borderWidth:1}}>   
        <IconAntDesign name='bars' size ={20} color='grey'/>
        </View>
        <Text style={styles.text} >Rate Our App</Text>
        <View style={{paddingLeft:200}}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>

        <Text></Text>
        
        <TouchableOpacity style={styles.Clicktabs}>
        <View style={{borderWidth:1}}>   
        <IconAntDesign name='bars' size ={20} color='grey'/>
        </View>
        <Text style={styles.text} >Make a Suggestion</Text>
        <View style={{paddingLeft:160}}> 
        <IconAntDesign name='rightcircleo' size ={20} color='grey'/>
        </View>
        </TouchableOpacity>
        
        </View> 

        </View>
        
        </View>
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

    icon:{
        width:20,
        height:15,
        borderRadius:200,
        borderWidth:1,
        padding:10
    },

    Clicktabs :{

        padding:15,
        borderRadius:20,
        borderWidth:0,
        backgroundColor: 'white',
        flexDirection:'row',
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