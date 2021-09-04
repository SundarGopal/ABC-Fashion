
import * as React from 'react';
import { Text, View,SafeAreaView, ScrollView, Image,Batch, TouchableOpacity,ImageBackground,StyleSheet } from 'react-native';
import {useState} from 'react-native';
import styles from "./Styles"
import Carousel from 'react-native-snap-carousel'

export const Apparel = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/Apparel.png')
export const Beauty = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/Beauty.png')
export const Shoes = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/Shoes.png')
export const SeeAll = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/SeeAll.png')

export const Shirt1 = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0001_fashion_image.jpg')
export const Shirt2 = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0002_fashion_image.jpg')
export const Shirt3 = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0003_fashion_image.jpg')
export const Shirt4 = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0004_fashion_image.jpg')
export const Shirt5 = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0005_fashion_image.jpg')
export const Shirt6 = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0006_fashion_image.jpg')

import IconAntDesign from 'react-native-vector-icons/AntDesign' //ADD Ionicons
import IconIonicons from 'react-native-vector-icons/Ionicons' //ADD
import Slider from './Carousel'

IconAntDesign.loadFont() //ADD
IconIonicons.loadFont()  //ADD 


export default function Home() {
    return (
      <SafeAreaView style={{backgroundColor:"#F5F5F5",flex:1}}>
        
        
        <View style={{alignItems:'flex-end'}}>
        
        <View style={{ padding:20 ,flexDirection:'row'}}>
        <TouchableOpacity>
        <View style={{ paddingRight:20}}>
        <IconAntDesign name='message1' size ={30} color='black'
                options={{
                  tabBarIcon: () => (
                 <Batch 
                   value={2}
                 />
                  ),
                }}
        />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{ paddingRight:5}}>
        <IconAntDesign name='notification' size ={30} color='black'/>
        </View>
        </TouchableOpacity>
        </View>
        </View>

        <ScrollView style={{height:'60%'}}>

        <Text style={{marginLeft: 20,fontSize: 40,fontWeight:'bold',justifyContent: 'center'}}>Categories</Text>
        <Text></Text>
        <View style={{flexDirection:'row',width:'auto'}}>
        <TouchableOpacity>
        <View>
        <Image style={styles.categoryIcon} source={Apparel} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View>
        <Image style={styles.categoryIcon}
                        source={Beauty} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View>
        <Image style={styles.categoryIcon}
                        source={Shoes} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View>
        <Image style={styles.categoryIcon}
                        source={SeeAll} />
        </View>
        </TouchableOpacity>
         
          </View>
        <Text> </Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.categoryText}> Apparel </Text>
        <Text style={styles.categoryText}>Beauty </Text>
        <Text style={{marginLeft: 30,fontSize: 20,justifyContent: 'center'}}> Shoes </Text>
        <Text style={{marginLeft: 30,fontSize: 20,justifyContent: 'center'}}> See All </Text>
        </View>

        <Text style={{fontSize:40,fontWeight: 'bold',marginLeft: 20,marginTop:10}} >Latest</Text>
{/*         <View style={{height:"10%"}}>
          <ImageBackground source={Shirt1} style ={styles.imageBackground} >     
          <Text style={styles.LatestTextStyle}>Hello</Text>
          </ImageBackground>
        </View> */}
        <View style={{flex:1,justifyContent: 'center'}} >
        <Slider/>
        </View>
        <View>
        
        <View style={styles_new.container}>
        
        <View style={styles_new.container2}>
        <Image source={Shirt1} style={styles_new.image}/>
        <Text style={styles_new.text}> V Neck Shirt</Text>
        <Text style={styles_new.text}> $24.99</Text>
        </View>
        
        <View style={styles_new.container2}>
        <Image source={Shirt2} style={styles_new.image}/>
        <Text style={styles_new.text}> V Neck Shirt</Text>
        <Text style={styles_new.text}> $24.99</Text>
        </View>
        
        </View>

        <View style={styles_new.container}>
        
        <View style={styles_new.container2}>
        <Image source={Shirt3} style={styles_new.image}/>
        <Text style={styles_new.text}> V Neck Shirt</Text>
        <Text style={styles_new.text}> $24.99</Text>
        </View>
        
        <View style={styles_new.container2}>
        <Image source={Shirt4} style={styles_new.image}/>
        <Text style={styles_new.text}> V Neck Shirt</Text>
        <Text style={styles_new.text}> $24.99</Text>
        </View>
        
        </View>

        <View style={styles_new.container}>
        
        <View style={styles_new.container2}>
        <Image source={Shirt5} style={styles_new.image}/>
        <Text style={styles_new.text}> V Neck Shirt</Text>
        <Text style={styles_new.text}> $24.99</Text>
        </View>
        
        <View style={styles_new.container2}>
        <Image source={Shirt6} style={styles_new.image}/>
        <Text style={styles_new.text}> V Neck Shirt</Text>
        <Text style={styles_new.text}> $24.99</Text>
        </View>
        
        </View>

        </View>
      

        
        </ScrollView>
      </SafeAreaView>
    );
  }


  const styles_new = StyleSheet.create({ 


    container :{
      borderWidth:0,
      alignItems:'center',
      paddingTop:10,
      paddingBottom:5,
      flexDirection:'row',
      borderRadius:20,
      justifyContent:'space-evenly',

    },
    text:{
      color:'gray',
      alignItems:'center',
      fontSize:16

    },

    container2 :{
      borderWidth:0,
      borderRadius:30,
      height:250,
      width:180,
      justifyContent:'space-around',
      alignItems:'center',
      paddingTop:20,
      backgroundColor:'white'
    },

    image :{
      height:180,
      width:150,
      borderRadius:30
    }

  })