import { SearchBar } from 'react-native-elements';
import {TextInput,View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import React, { useState } from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign' 
import { useNavigation } from '@react-navigation/core';

IconAntDesign.loadFont()

import styles from '../Styles'
const Header = () => {



  [search, setSearch] = useState(' ');
  const navigation=useNavigation()



  return (
    <View style={{flexDirection:'row',height:"5%",backgroundColor:'white',marginBottom:10,marginTop:50}}>
  
    <TouchableOpacity onPress={()=>{navigation.navigate('Home',{})}}>
    <IconAntDesign name='left' size ={30} color='red' style={{paddingLeft:10,paddingRight:10,borderWidth:0}}/>
    </TouchableOpacity>
    <View style={styles.searchpageSection}>
    <IconAntDesign style={styles.searchpageIcon} name="search1" size={20} color="#515c6f"/>
    <TextInput
        style={styles.searchpageinput}
        placeholder="Search"
        onChangeText={(searchString) => {setSearch({searchString})}}
        underlineColorAndroid="transparent"
    />
</View>
     <TouchableOpacity >
    <IconAntDesign name='filter' size ={30} color='#515c6f' style={{paddingLeft:10,paddingRight:10,borderWidth:0}}/>
    </TouchableOpacity>

</View>
  );

}



export default Header;
