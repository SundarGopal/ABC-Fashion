import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StyleSheet
  } from 'react-native';

  const ProductDetails= props=>{

    console.log(props)
    const productId = props.navigation.getParam('productId');

    console.log(productId)
    const selectedProduct= useSelector(state => 
        
        state.products.find(prod => prod.id === productId)
        )


    return(
        <ScrollView>
            <Text>{selectedProduct}</Text>
            <Text>${selectedProduct.rate}</Text>


        <View> 
        <View style={{borderWidth:1,backgroundColor: 'white',flexDirection:'row',justifyContent: 'space-evenly',width: '50%'}} >
            <TouchableOpacity>
            <View style={{backgroundColor:'white',borderWidth:1,borderRadius:20,alignItems: 'center',padding:5,}}>
            <Text>Product</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{backgroundColor:'white',borderWidth:1,borderRadius:20,alignItems: 'center',padding:5,}}>
            <Text>Details</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{backgroundColor:'white',borderWidth:1,borderRadius:20,alignItems: 'center',padding:5,}}>
            <Text>Reviews</Text>
            </View>
            </TouchableOpacity>
            </View>
        </View>
         </ScrollView>
    )

  }


  export default ProductDetails;