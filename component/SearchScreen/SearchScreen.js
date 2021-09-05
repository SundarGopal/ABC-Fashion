import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert,
    FlatList,
    style
} from 'react-native';

import Home from '../Home.js'
import ProductsOverviewScreen from "../Products/ProductsOverviewScreen"
import Header from "./Header"




const SearchScreen = () => {
    let [stateTabT1, setStateTabT1] = useState(null)
    let [stateTabT2, setStateTabT2] = useState(null)
    let [stateTabT3, setStateTabT3] = useState(null)
    let [stateTabT4, setStateTabT4] = useState(null)

    return (
        <View style={{ backgroundColor: 'white' }}>
            <Header />
            <View style={{ flexDirection: 'row', borderWidth: 0, width: "100%", height: 45, alignItems: 'center', justifyContent: 'space-evenly' }}>

                <TouchableOpacity
                    onPress={() => {
                        if (stateTabT1 == 1) {
                            setStateTabT1(0);
                        }
                        else {
                            setStateTabT1(1)
                            setStateTabT2(0)
                            setStateTabT3(0)
                            setStateTabT4(0)

                        }
                    }}>
                    <Text style={{ color: stateTabT1 == 1 ? "red" : "grey", backgroundColor: 'white' }}>BEST MATCH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        if (stateTabT2 == 1) {
                            setStateTabT2(0);
                        }
                        else {
                            setStateTabT1(0)
                            setStateTabT2(1)
                            setStateTabT3(0)
                            setStateTabT4(0)

                        }
                    }}>
                    <Text style={{ color: stateTabT2 == 1 ? "red" : "grey", backgroundColor: 'white' }}>TOP RATED</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        if (stateTabT3 == 1) {
                            setStateTabT3(0);
                        }
                        else {
                            setStateTabT1(0)
                            setStateTabT2(0)
                            setStateTabT3(1)
                            setStateTabT4(0)

                        }
                    }} >
                    <Text style={{ color: stateTabT3 == 1 ? "red" : "grey", backgroundColor: 'white' }}>PRICE LOW-HIGH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        if (stateTabT4 == 1) {
                            setStateTabT4(0);
                        }
                        else {
                            setStateTabT1(0)
                            setStateTabT2(0)
                            setStateTabT3(0)
                            setStateTabT4(1)

                        }
                    }}>
                    <Text style={{ color: stateTabT4 == 1 ? "red" : "grey", backgroundColor: 'white' }}> PRICE</Text>
                </TouchableOpacity>

            </View>
            <ProductsOverviewScreen />

        </View>
    )

}

export default SearchScreen;


const styles = StyleSheet.create({

    text: {

        color: 'grey',

    }


})