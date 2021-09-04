
import React, { useState,useEffect } from "react";
import { Text, View,SafeAreaView, ScrollView,Image ,StyleSheet,Dimensions, TouchableOpacity,TouchableHighlight } from 'react-native';

import IconFeather from 'react-native-vector-icons/Feather'
import IconAntDesign from 'react-native-vector-icons/AntDesign'


const {width} = (Dimensions.get('window'));
const height = width*0.5

IconFeather.loadFont();
IconAntDesign.loadFont();

export default function ProductDetail() {

  let [stateProduct,setStateProduct] = useState(null)
  let [stateDetail,setStateDetail] = useState(null)
  let [stateReviews,setStateReviews] = useState(null)
  
  
  return (
<ScrollView>
<View style={{flex:0,borderWidth:0,backgroundColor: '#F5F5F5',justifyContent: 'center',paddingLeft:20,paddingRight:20}}>
      

<View style={{borderWidth:0,justifyContent:'space-around',alignItems:'center',height:70,paddingTop:20}}>
<Text>V Neck Shirt - Pink</Text>
<Text>price - rating</Text>
</View>

<View style={{borderWidth:0,justifyContent:'space-around',alignItems:'center',paddingTop:30,paddingBottom:40}}>
<Image source={require('./0001_fashion_image.jpg')} style={{height:200,width:150}} />
</View>



<View style={{borderWidth:0,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingLeft:0,height:60,paddingTop:20}} >

    <TouchableOpacity onPress={()=>{
        if(stateProduct==1){
            setStateProduct(0);
        }
        else{
            setStateProduct(1)
            setStateDetail(0)
            setStateReviews(0)
        }
    }}>
    <View style={{backgroundColor:'white',borderWidth:0,borderRadius:20,alignItems: 'center',padding:10,}}>
    
    <Text style={{color:stateProduct==1?"red" : "grey"}}>Product</Text>
    </View>
    </TouchableOpacity>

    <Text>   </Text>

    <TouchableOpacity onPress={()=>{
        if(stateDetail==1){
            setStateDetail(0);
        }
        else{
            setStateProduct(0)
            setStateDetail(1)
            setStateReviews(0)
        }
    }}>
    <View style={{backgroundColor:'white',borderWidth:0,borderRadius:20,alignItems: 'center',padding:10}}>
    <Text style={{color:stateDetail==1?"red" : "grey"}}>Details</Text>
    </View>
    </TouchableOpacity>
    
    <Text>   </Text>

    <TouchableOpacity onPress={()=>{
        if(stateReviews==1){
            setStateReviews(0);
        }
        else{
            setStateProduct(0)
            setStateDetail(0)
            setStateReviews(1)
        }
    }}>
    <View style={{backgroundColor:'white',borderWidth:0,borderRadius:20,alignItems: 'center',padding:10,}}>
    <Text style={{color:stateReviews==1?"red" : "grey"}}>Reviews</Text>
    </View>
    </TouchableOpacity>
</View>
    <Text>  </Text>
   
       
        <View style={{borderRadius:0,paddingLeft:15}}>
        <Text style={{color:'grey'}} >SELECT COLOR</Text>
        </View>
       
        <Text>  </Text>

        <View style={{flexDirection:'row',borderWidth:0,justifyContent: 'space-evenly'}}>
        
        <TouchableOpacity>    
        <View style={{backgroundColor:'#fb6090',borderWidth:0,borderRadius:30,alignItems: 'center',padding:0,width:40,height:40}}>
        </View>
        </TouchableOpacity>  
        <TouchableOpacity>    
        <View style={{backgroundColor:'#f37970',borderWidth:0,borderRadius:30,alignItems: 'center',padding:0,width:40,height:40}}>
        </View>
        </TouchableOpacity>  
        <TouchableOpacity>    
        <View style={{backgroundColor:'skyblue',borderWidth:0,borderRadius:30,alignItems: 'center',padding:0,width:40,height:40}}>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>      
        <View style={{backgroundColor:'white',borderWidth:0,borderRadius:30,alignItems: 'center',padding:0,width:40,height:40}}>
        </View>
        </TouchableOpacity>   
        <TouchableOpacity>   
        <View style={{backgroundColor:'lightgrey',borderWidth:0,borderRadius:30,alignItems: 'center',padding:0,width:40,height:40}}>
        </View>
        </TouchableOpacity>  
        <TouchableOpacity>    
        <View style={{backgroundColor:'black',borderWidth:0,borderRadius:30,alignItems: 'center',padding:0,width:40,height:40}}>
        </View>
        </TouchableOpacity>   
        
        </View>

        <Text>  </Text>
        <View style={{borderRadius:1,paddingLeft:15}}>
        <Text style={{color:'grey'}} >SELECT SIZE</Text>
        </View>

        <Text>  </Text>

        <View style={{flexDirection:'row',borderWidth:0,justifyContent: 'space-around'}}>
        
        <TouchableOpacity>    
        <View style={{backgroundColor:'white',borderWidth:0,borderRadius:10,alignItems: 'center',justifyContent:'center',padding:0,width:75,height:40}}>
        <Text style={styles.text} >4.5</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>    
        <View style={{backgroundColor:'white',borderWidth:0,borderRadius:10,alignItems: 'center',justifyContent:'center',padding:0,width:75,height:40}}>
        <Text style={styles.text}>5</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>    
        <View style={{backgroundColor:'white',borderWidth:0,borderRadius:10,alignItems: 'center',justifyContent:'center',padding:0,width:75,height:40}}>
        <Text style={styles.text}>6.5</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>    
        <View style={{backgroundColor:'white',borderWidth:0,borderRadius:10,alignItems: 'center',justifyContent:'center',padding:0,width:75,height:40}}>
        <Text style={styles.text}>7</Text>
        </View>
        </TouchableOpacity>
        
        </View>

        <View style={{borderWidth:0,justifyContent:'space-evenly',alignItems: 'center',flexDirection:'row',paddingTop:40}} >
        
        <TouchableOpacity style={styles.buttonContainer1}>
        <Text style={{paddingLeft:20,paddingRight:10,borderWidth:0}}>
        <Text style={{fontWeight:'bold',color:'grey'}}>SHARE THIS</Text>
        </Text>
        <Text>
        <IconFeather name="arrow-up-circle" color="grey" size={30}/>
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer2}>
        <Text style={{paddingLeft:20,paddingRight:5,paddingBottom:0,borderWidth:0}}>
        <Text style={{fontWeight:'bold',color:'white'}}>ADD TO CART</Text>
        </Text>
        <Text>
        <IconAntDesign name="rightcircleo" size={25} color='white'/>
        </Text>
        </TouchableOpacity>

        </View>
</View>
</ScrollView>

    );
  }


const styles = StyleSheet.create({

  container:{
    flexDirection:'row',
    backgroundColor:'grey',
    paddingTop:100,
    borderWidth:1,
    
  },

  container1:{
    flexDirection:'row',
    backgroundColor:'white',
    paddingTop:0,
    borderWidth:1,
    height:200,
    justifyContent:'space-evenly'    
  },

  picture:{
    resizeMode:'stretch',
    borderRadius:50,
    borderWidth:1,
    width:width*0.9,
    height,
    padding:0,
  },

  text:{
    fontSize:16,
    color:'grey',

},

buttonContainer1: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: "45%",
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth:0
},
buttonContainer2: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: "45%",
    borderRadius: 30,
    backgroundColor: "#FF6969",
    borderWidth:0
},

})