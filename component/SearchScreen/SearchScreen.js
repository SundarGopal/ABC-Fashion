import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    FlatList,
    style
} from 'react-native';
import ProductsOverviewScreen from "../Products/ProductsOverviewScreen"
import Header from "./Header"
import styles from '../Styles';

const SearchSreen=()=>{

    return(
        <View style={{marginTop:30}}>
        <Header />
        <ProductsOverviewScreen />

        </View>
    )
    
}

export default SearchSreen;