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

import Card from './Card';

const ProductItem = props => {

    return (

    <Card>
        <View>
            <TouchableOpacity>
                <View>
                    <View>
                      <Image source={require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/tshirt/0001_fashion_image.jpg') } /> 
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