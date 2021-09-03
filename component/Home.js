
import * as React from 'react';
import { Text, View,SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import {useState} from 'react-native';
import styles from "./Styles"

export const Apparel = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/Apparel.png')
export const Beauty = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/Beauty.png')
export const Shoes = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/Shoes.png')
export const SeeAll = require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/SeeAll.png')

import IconAntDesign from 'react-native-vector-icons/AntDesign' //ADD Ionicons
import IconIonicons from 'react-native-vector-icons/Ionicons' //ADD

IconAntDesign.loadFont() //ADD
IconIonicons.loadFont()  //ADD 

export default function Home() {
    return (
      <SafeAreaView>
        
        <View style={{alignItems:'flex-end'}}>
        
        <View style={{ padding:20 ,flexDirection:'row',borderWidth:0}}>
        <TouchableOpacity>
        <View style={{ paddingRight:20}}>
        <IconAntDesign name='message1' size ={30} color='black'/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{ paddingRight:5}}>
        <IconIonicons name='notifications-outline' size ={30} color='black'/>
        </View>
        </TouchableOpacity>
        </View>
        </View>

        <ScrollView>

        <Text style={{marginLeft: 10,fontSize: 40,fontWeight:'bold',justifyContent: 'center'}}>Categories</Text>
        <Text></Text>
        <View style={{flexDirection:'row',width:'auto'}}>
        <TouchableOpacity>
        <View>
        <Image style={styles.categoryIcon}
                        source={Apparel} />
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

        <Text style={{fontSize:40,fontWeight: 'bold'}} >Latest</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }