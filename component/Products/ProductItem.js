import React from 'react';
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
{/*                      <Img src=
                     {require('../src/tshirt/0001_fashion_image.jpg') }/> */}
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

export default ProductItem;