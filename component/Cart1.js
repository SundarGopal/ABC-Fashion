import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView
} from 'react-native';
import {Badge} from 'react-native-elements';
import { getUsers } from '../../services/userstorage'
import { Icon } from "react-native-elements"
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/core'; //NAVIGATION
import {getProducts, getCart} from '../services/productstorage'

export const ARROW = require('../src/ARROW.png')
IconAntDesign.loadFont()

const checkout = navigation => {
    Alert.alert(
        'Are you sure ',
        'You want to Place order',

        [
            { text: 'Yes', onPress: () => navigation.navigate('OrderPlaced') },
            {
                text: 'No',
                onPress: () => console.log('No button clicked'),
                style: 'cancel',
            },
        ],
        {
            cancelable: true,
        },
    );
};



 function Cart (props) {
    
    const [count,setCount] = useState(1);
    
    function Counter (){
        const initialCount = 0
        return(
            <View style={{flexDirection:'row',alignItems:'flex-start',borderWidth:0,paddingTop:10}}>
                
                <TouchableOpacity onPress={()=>{
                    if(count>0)
                    {setCount(count-1)} 
                    else{setCount(0)} 
                }}>
                <IconAntDesign name='minuscircleo' size={20} color='gray' style={{ paddingRight: 5, marginLeft: 0, borderWidth: 0 }} />
                    </TouchableOpacity>
                <Text style={{fontSize:15,color:'#636976'}}>{count}</Text>
                <TouchableOpacity onPress={()=>setCount(count+1)} style={{borderWidth:0}}>
                <IconAntDesign name='pluscircleo' size={20} color='gray' style={{ paddingLeft:5, marginLeft: 0, borderWidth: 0 }} />
                    </TouchableOpacity>
                </View>
        )
    }


    let navigation = useNavigation();


   let  onOrderPlacedButton = () => {
        navigation.navigate('Search', {});
    }

    let onOrderCancelButton = () => {
        navigation.navigate('Home', {});
    }
    
    let property=props.route.params
   let productProperty ={}
   console.log(property)
    if(property==undefined){
        
        productProperty=getCart()
    }
    else{
    productProperty=getProducts()[property.prod_id-1]
    }
    //console.log(product_id)
        return (

      
            
            <View style={{backgroundColor:'#F5F5F5',flex:1,borderWidth:0}}>

            <View style={{ borderWidth: 0, justifyContent: 'space-between', alignItems: 'center', height: 90, flexDirection: 'row', paddingTop: 50 ,backgroundColor:'#F5F5F5' }}>
                
                <TouchableOpacity onPress={() => { navigation.navigate('Home', {}) }}>
                    <IconAntDesign name='left' size={30} color='red' style={{ paddingRight: 50, marginLeft: 10, borderWidth: 0 }} />
                </TouchableOpacity>
                
                <View style={{ alignItems: 'flex-end', paddingTop: 0, borderWidth: 0 }}>
                    
                    <View style={{ flexDirection: 'row' }}>
                        
                        <TouchableOpacity>
                            
                            <View style={{ paddingRight: 20 }}>
                                <IconAntDesign name='message1' size={30} color='black' />
                                <Badge value="7" status="error" containerStyle={{ position: 'absolute', top: 0, right: 10 }} />

                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <View style={{ paddingRight: 20 }}>
                                <IconAntDesign name='notification' size={30} color='black' />
                                <Badge value="15" status="error" containerStyle={{ position: 'absolute', top: 0, right: 10 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'#F5F5F5',paddingTop:10}} >
                <Text style={styles.cartTitle}>CART</Text>
            </View>
        
            <View style={{paddingLeft:10,paddingRight:50,paddingTop:20,borderWidth:0,flexDirection: 'row',height:150,backgroundColor:'#F5F5F5'}}>
            
            <Image style={{width:130,height:130,borderRadius:200,resizeImage:'contain'}} source={productProperty.url}/>
            <View style={{borderWidth:0,paddingLeft:15}}> 
            <Text style={{fontSize:18,color:'#636976'}}>{productProperty.name}</Text>
            <Text style={{fontSize:16,color:'#636976'}}>{productProperty.color}</Text>
            <Text style={{color:'red', fontSize:17}}>${productProperty.rate}</Text>
            <Counter/>
            </View>
        
            </View>
            
            
            <View style={{flex:1,backgroundcolor:'#F5F5F5'}}>
            <Text style={styles.cartText1}>TOTAL</Text>
            <Text style={styles.cartText2}>${productProperty.rate*count}</Text>
            <Text style={styles.cartText3}>Free Domestic Shipping</Text>
            <TouchableOpacity style={styles.CartbuttonContainer}
        onPress={() => checkout(navigation.navigate('OrderPlaced',{}))}>  
                <View style={{flex:1,flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 15,fontWeight:'bold',marginLeft:20}}>CHECKOUT</Text>
                    <Image style={{marginLeft:30}} source={ARROW} />
                    </View>
        
      </TouchableOpacity>
      </View>

            </View>


        );
    }


export default Cart;

const styles = StyleSheet.create({
    CartbuttonContainer:{
        backgroundColor: "#FF6969", 
        alignItems: 'center',
        borderColor: "#FFFFFF",
        height: 30,
        width: 180,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 15,
        position:'absolute',
        height:55,
        right:10,
        bottom:50,
        borderRadius:30   
    },
    cartText1:{
        position:'absolute',
        bottom:130, 
        left:10,
        fontSize:12,
        color:'gray'
        
    },
    cartText2:{
        position:'absolute',
        bottom:90, 
        left:10,
        fontSize:25,
        color:'#65718F',
        fontWeight:'bold'
    }, 
    cartText3:{
        position:'absolute',
        bottom:70, 
        left:10, 
        fontSize:15,
        color:'#65718F'
    },

    cartTitle:{
        fontSize:30,
        fontWeight: 'bold',
        paddingLeft:20,
        color:'#65718F'
    },

})