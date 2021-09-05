
import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';

import IconFeather from 'react-native-vector-icons/Feather'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

import { useNavigation } from '@react-navigation/core'; //NAVIGATION
import { getProducts } from "../../services/productstorage";
const { width } = (Dimensions.get('window'));
import {Badge} from 'react-native-elements'
const height = width * 0.5

IconFeather.loadFont();
IconAntDesign.loadFont();

export default ProductDetail = props => {
    console.log(props)
    let navigation = useNavigation();
    let property=props.route.params
    let productProperty=getProducts()[property.productId-1]
    let [stateProduct, setStateProduct] = useState(null)
    let [stateDetail, setStateDetail] = useState(null)
    let [stateReviews, setStateReviews] = useState(null)
    
    let [stateTickC1, setStateTickC1] = useState(null)
    let [stateTickC2, setStateTickC2] = useState(null)
    let [stateTickC3, setStateTickC3] = useState(null)
    let [stateTickC4, setStateTickC4] = useState(null)
    let [stateTickC5, setStateTickC5] = useState(null)
    let [stateTickC6, setStateTickC6] = useState(null)

    let [stateSizeS1, setStateSizeS1] = useState(null)
    let [stateSizeS2, setStateSizeS2] = useState(null)
    let [stateSizeS3, setStateSizeS3] = useState(null)
    let [stateSizeS4, setStateSizeS4] = useState(null)

    return (
        <ScrollView style={{borderWidth:1}}>

            <View style={{ flex: 1, borderWidth: 0, backgroundColor: '#F5F5F5', justifyContent: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 70 }}>


                <View style={{ borderWidth: 0, justifyContent: 'space-between', alignItems: 'center', height: 70, flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => { navigation.navigate('Search', {}) }}>
                        <IconAntDesign name='left' size={30} color='red' style={{ paddingRight: 50, borderWidth: 0 }} />
                    </TouchableOpacity>

                    <View style={{ borderWidth:0, paddingRight: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{flexDirection: 'row'}}>
                        
                        <Text style={{ fontSize: 18,color:'gray',fontWeight:'bold',paddingLeft:0,paddingBottom:5 }}>{productProperty.name}</Text>
                        <Text style={{ fontSize: 18,color:'gray',fontWeight:'bold' }}>-{productProperty.color}</Text>
                        </View>
        
                        <View style={{borderWidth:0,flexDirection:'row'}} >
                        <Text style={{ fontSize: 16,fontWeight:'bold',paddingLeft:10 }}>${productProperty.rate}  </Text>
                        
                        <View style={{borderWidth:0,backgroundColor:'#FF6969',borderRadius:10,width:55,height:25,flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                        <IconAntDesign name='star' size={15} color={'white'}/>
                        <Text style={{color:'white',fontWeight:'bold'}} > {productProperty.rating}</Text>
                        </View>
                    </View>
                    
                    </View >
                    <View style={{ alignItems: 'flex-end', right: 5,bottom:5, borderWidth: 0 }}>
                        <View>
                            <TouchableOpacity>
                                <View style={{ paddingRight: 20 }}>
                                    <IconAntDesign name='shoppingcart' size={30} color='black' />
                                    <Badge value="5" status="error" containerStyle={{ position: 'absolute', top:0, right:10 }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ borderWidth: 0, justifyContent: 'space-around', alignItems: 'center', paddingTop: 30, paddingBottom: 40 }}>
                    <Image source={productProperty.url} style={{ height: 200, width: 150 }} />
                </View>



                <View style={{ borderWidth: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 0, height: 60, paddingTop: 20 }} >

                    <TouchableOpacity onPress={() => {
                        if (stateProduct == 1) {
                            setStateProduct(0);
                        }
                        else {
                            setStateProduct(1)
                            setStateDetail(0)
                            setStateReviews(0)
                        }
                    }}>
                        <View style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 20, alignItems: 'center', padding: 10, }}>

                            <Text style={{ color: stateProduct == 1 ? "red" : "grey" }}>Product</Text>
                        </View>
                    </TouchableOpacity>

                    <Text>   </Text>

                    <TouchableOpacity onPress={() => {
                        if (stateDetail == 1) {
                            setStateDetail(0);
                        }
                        else {
                            setStateProduct(0)
                            setStateDetail(1)
                            setStateReviews(0)
                        }
                    }}>
                        <View style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 20, alignItems: 'center', padding: 10 }}>
                            <Text style={{ color: stateDetail == 1 ? "red" : "grey" }}>Details</Text>
                        </View>
                    </TouchableOpacity>

                    <Text>   </Text>

                    <TouchableOpacity onPress={() => {
                        if (stateReviews == 1) {
                            setStateReviews(0);
                        }
                        else {
                            setStateProduct(0)
                            setStateDetail(0)
                            setStateReviews(1)
                        }
                    }}>
                        <View style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 20, alignItems: 'center', padding: 10, }}>
                            <Text style={{ color: stateReviews == 1 ? "red" : "grey" }}>Reviews</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text>  </Text>


                <View style={{ borderWidth:0, borderRadius: 0, paddingLeft: 15, paddingTop:10 }}>
                    <Text style={{ color: 'grey' }} >SELECT COLOR</Text>
                </View>

                <Text>  </Text>

                <View style={{ flexDirection: 'row', borderWidth: 0, justifyContent: 'space-evenly' }}>

                    <TouchableOpacity onPress={() => {
                        if (stateTickC1 == 1) {
                            setStateTickC1(0);
                        }
                        else {
                            setStateTickC1(1)
                            setStateTickC2(0)
                            setStateTickC3(0)
                            setStateTickC4(0)
                            setStateTickC5(0)
                            setStateTickC6(0)                           
                        }
                    }}>
                       
                       
                        <View style={{ backgroundColor: '#fb6090', borderWidth: 0, borderRadius: 30, alignItems: 'center', padding: 0, width: 40, height: 40 }}>
                        <IconAntDesign name='check' size={30} color={stateTickC1 == 1 ? "white" : "transparent" } style={{paddingTop:5}} />
                        </View>
                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity
                    onPress={() => {
                        if (stateTickC2 == 1) {
                            setStateTickC2(0);
                        }
                        else {
                            setStateTickC1(0)
                            setStateTickC2(1)
                            setStateTickC3(0)
                            setStateTickC4(0)
                            setStateTickC5(0)
                            setStateTickC6(0)                           
                        }
                    }}>
                        <View style={{ backgroundColor: '#f37970', borderWidth: 0, borderRadius: 30, alignItems: 'center', padding: 0, width: 40, height: 40 }}>
                        <IconAntDesign name='check' size={30} color={stateTickC2 == 1 ? "white" : "transparent" } style={{paddingTop:5}} />
                        </View>
                    </TouchableOpacity>
                    
                    
                    
                    <TouchableOpacity onPress={() => {
                        if (stateTickC3 == 1) {
                            setStateTickC3(0);
                        }
                        else {
                            setStateTickC1(0)
                            setStateTickC2(0)
                            setStateTickC3(1)
                            setStateTickC4(0)
                            setStateTickC5(0)
                            setStateTickC6(0)                           
                        }
                    }}>
                        <View style={{ backgroundColor: 'skyblue', borderWidth: 0, borderRadius: 30, alignItems: 'center', padding: 0, width: 40, height: 40 }}>
                        <IconAntDesign name='check' size={30} color={stateTickC3 == 1 ? "white" : "transparent" } style={{paddingTop:5}} />
                        </View>
                    </TouchableOpacity>
                    
                    
                    
                    <TouchableOpacity
                     onPress={() => {
                        if (stateTickC4 == 1) {
                            setStateTickC4(0);
                        }
                        else {
                            setStateTickC1(0)
                            setStateTickC2(0)
                            setStateTickC3(0)
                            setStateTickC4(1)
                            setStateTickC5(0)
                            setStateTickC6(0)                           
                        }
                    }}>
                        <View style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 30, alignItems: 'center', padding: 0, width: 40, height: 40 }}>
                        <IconAntDesign name='check' size={30} color={stateTickC4 == 1 ? "black" : "transparent" } style={{paddingTop:5}} />
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {
                        if (stateTickC5 == 1) {
                            setStateTickC5(0);
                        }
                        else {
                            setStateTickC1(0)
                            setStateTickC2(0)
                            setStateTickC3(0)
                            setStateTickC4(0)
                            setStateTickC5(1)
                            setStateTickC6(0)                           
                        }
                    }}>
                        <View style={{ backgroundColor: 'lightgrey', borderWidth: 0, borderRadius: 30, alignItems: 'center', padding: 0, width: 40, height: 40 }}>
                        <IconAntDesign name='check' size={30} color={stateTickC5 == 1 ? "white" : "transparent" } style={{paddingTop:5}} />
                        </View>
                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity
                    onPress={() => {
                        if (stateTickC6 == 1) {
                            setStateTickC6(0);
                        }
                        else {
                            setStateTickC1(0)
                            setStateTickC2(0)
                            setStateTickC3(0)
                            setStateTickC4(0)
                            setStateTickC5(0)
                            setStateTickC6(1)                           
                        }
                    }}>
                        <View style={{ backgroundColor: 'black', borderWidth: 0, borderRadius: 30, alignItems: 'center', padding: 0, width: 40, height: 40 }}>
                        <IconAntDesign name='check' size={30} color={stateTickC6 == 1 ? "white" : "transparent" } style={{paddingTop:5}} />
                        </View>
                    </TouchableOpacity>

                </View>

                <Text>  </Text>
                <View style={{ borderWidth:0,paddingTop:10,borderRadius: 1, paddingLeft: 15 }}>
                    <Text style={{ color: 'grey' }} >SELECT SIZE</Text>
                </View>

                <Text>  </Text>

                <View style={{ flexDirection: 'row', borderWidth: 0, justifyContent: 'space-around' }}>

                    <TouchableOpacity
                     onPress={() => {
                        if (stateSizeS1 == 1) {
                            setStateSizeS1(0);
                        }
                        else {
                            setStateSizeS1(1)
                            setStateSizeS2(0)
                            setStateSizeS3(0)
                            setStateSizeS4(0)
                         
                        }
                    }}>
                        <View style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 0, width: 75, height: 40 }}>
                            <Text style={{fontSize:16,color: stateSizeS1 == 1 ? "red" : "grey" }} >4.5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        if (stateSizeS2 == 1) {
                            setStateSizeS2(0);
                        }
                        else {
                            setStateSizeS1(0)
                            setStateSizeS2(1)
                            setStateSizeS3(0)
                            setStateSizeS4(0)
                         
                        }
                    }}>
                        <View style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 0, width: 75, height: 40 }}>
                            <Text style={{fontSize:16,color: stateSizeS2 == 1 ? "red" : "grey" }}>5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        if (stateSizeS3 == 1) {
                            setStateSizeS3(0);
                        }
                        else {
                            setStateSizeS1(0)
                            setStateSizeS2(0)
                            setStateSizeS3(1)
                            setStateSizeS4(0)
                         
                        }
                    }}>
                        <View style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 0, width: 75, height: 40 }}>
                            <Text style={{fontSize:16,color: stateSizeS3 == 1 ? "red" : "grey" }}>6.5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        if (stateSizeS4 == 1) {
                            setStateSizeS4(0);
                        }
                        else {
                            setStateSizeS1(0)
                            setStateSizeS2(0)
                            setStateSizeS3(0)
                            setStateSizeS4(1)
                         
                        }
                    }}>
                        <View style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 0, width: 75, height: 40 }}>
                            <Text style={{fontSize:16,color: stateSizeS4 == 1 ? "red" : "grey" }}>7</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ borderWidth: 0, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', paddingTop: 50 }} >

                    <TouchableOpacity style={styles.buttonContainer1}>
                        <Text style={{ paddingLeft: 20, paddingRight: 10, borderWidth: 0 }}>
                            <Text style={{ fontWeight: 'bold', color: 'grey' }}>SHARE THIS</Text>
                        </Text>
                        <Text>
                            <IconFeather name="arrow-up-circle" color="grey" size={30} />
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer2} onPress={()=>{navigation.navigate('Cart1',{prod_id:productProperty.id})}}>
                        <Text style={{ paddingLeft: 20, paddingRight: 5, paddingBottom: 0, borderWidth: 0 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>ADD TO CART</Text>
                        </Text>
                        <Text>
                            <IconAntDesign name="rightcircleo" size={25} color='white' />
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>

    );
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        paddingTop: 100,
        borderWidth: 1,

    },

    container1: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 0,
        borderWidth: 1,
        height: 200,
        justifyContent: 'space-evenly'
    },

    picture: {
        resizeMode: 'stretch',
        borderRadius: 50,
        borderWidth: 1,
        width: width * 0.9,
        height,
        padding: 0,
    },


    buttonContainer1: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: "45%",
        borderRadius: 30,
        backgroundColor: "white",
        borderWidth: 0
    },
    buttonContainer2: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: "45%",
        borderRadius: 30,
        backgroundColor: "#FF6969",
        borderWidth: 0
    },

})