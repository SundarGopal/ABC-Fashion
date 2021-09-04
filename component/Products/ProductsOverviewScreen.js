import React from 'react';


import { FlatList, Button, Platform } from 'react-native';
import ProductItem from './ProductItem'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../services/productstorage';
import { useNavigation } from '@react-navigation/core';


const ProductsOverviewScreen= (props) => {

    // const products = useSelector(state => state.products);
    // const dispatch = useDispatch();


    let navigation = useNavigation();

    const selectItemHandler = (id, name) => {
      console.log("HELLLoo")
    props.navigation.navigate('ProductDetails', {
      productId: id,
      productTitle: name
    });
  };



    return(
  
        <FlatList 
        data={getProducts()}
        keyExtractor={item => item.id}
        renderItem={itemData => (
        <ProductItem
          url={itemData.item.url}
          name={itemData.item.name}
          rate={itemData.item.rate}
          onSelect={() => {
            console.log("PRESSED"),
            selectItemHandler(itemData.item.id, itemData.item.name);
          }}
        ></ProductItem>
        
        )}
        />

    )

    
}

export default ProductsOverviewScreen;

/*
return(
  
        <FlatList 
        data={getProducts()}
        keyExtractor={item => item.id}
        renderItem={itemData => (
        <ProductItem
          url={itemData.item.url}
          name={itemData.item.name}
          rate={itemData.item.rate}
          onSelect={() => {
            console.log("PRESSED"),
            selectItemHandler(itemData.item.id, itemData.item.name);
          }}
        ></ProductItem>
        
        )}
        />

    )

    
}*/