
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  SafeAreaView,
  ScrollView
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
IconAntDesign.loadFont();



import { useNavigation } from '@react-navigation/core';

const ProductItem = props => {

  let navigation = useNavigation();

  const selectItemHandler = (id, name) => {

    console.log("HELLLO NAVIGATING")

    navigation.navigate('ProductDetails', {
      productId: id,
      productTitle: name
    });
  };

  return (
    <SafeAreaView>
      <ScrollView >
        <View style={{ backgroundColor: '#f2f3f6',borderWidth:0}}>

          <TouchableOpacity onPress={() => { selectItemHandler(props.id, props.name) }} >

            <View style={styles_new.container}>

              <View style={styles_new.container2}>
                <Image source={props.url} style={styles_new.image} />
                <Text style={styles_new.text}>{props.name}</Text>


                <View style={{ borderWidth: 0, flexDirection: 'row', marginTop: 5 }} >
                  <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 10 }}>${props.rate}  </Text>

                  <View style={{ borderWidth: 0, backgroundColor: '#FF6969', borderRadius: 10, width: 55, height: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                    <IconAntDesign name='star' size={15} color={'white'} />
                    <Text style={{ color: 'white', fontWeight: 'bold' }} > {props.rating}</Text>
                  </View>
                </View>
              </View>
            </View>

          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}





const styles_new = StyleSheet.create({


  container: {
    borderWidth: 0,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'space-evenly',
    backgroundColor: '#f2f3f6',
    marginLeft: 10,

  },
  text: {
    color: 'gray',
    alignItems: 'flex-start',
    fontSize: 16,
    marginTop: 10,
    marginRight: 30


  },

  container2: {
    borderWidth: 0,
    borderRadius: 20,
    height: 250,
    width: 180,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: 'white'
  },

  image: {
    flex: 1,
    resizeMode: 'contain'

  }

})
export default ProductItem;

/* import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import {Img} from 'react-image'

import { useNavigation } from '@react-navigation/core';


import Card from './Card';

const ProductItem = props => {

    let navigation = useNavigation();

    const selectItemHandler = (id, name) => {
        
        console.log("HELLLO NAVIGATING")

      navigation.navigate('ProductDetails', {
        productId: id,
        productTitle: name
      });
    };

    return (

    <Card>
        <View>
            <TouchableOpacity onPress={()=> {
                
                selectItemHandler(props.id,props.name);
                
                console.log("THE PROPS ARE")
                console.log(props)
                console.log("IN PRODUCT")
                
                }} >
                
                
                <View>
                    <View>
                      <Image source={props.url} /> 
                    </View>
                    <View>
                        <Text>{props.name}</Text>
                        <Text>${props.rate}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    </Card>
)
}

export default ProductItem; */
//---------------------NEW VERSION---------------------




