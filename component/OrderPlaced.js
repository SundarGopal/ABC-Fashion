import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import styles from "./Styles"
import { getUsers } from '../../services/userstorage'
import {Icon} from "react-native-elements"

export const TICK=require('../src/Tick.png')

export const CANCEL=require('../src/Cancel.png')

export const ARROW = require('../src/ARROW.png')





export default class OrderPlaced extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'OrderPlaced'
    };

    onOrderPlacedButton = () => {
        this.props.navigation.navigate('Search', { });
    }

    onOrderCancelButton = () => {
        this.props.navigation.navigate('Home', { });
    }

    render() {
        return (
  
            <View>
                <View style={{marginTop: 30}}>
                <TouchableOpacity onPress={() => this.onOrderCancelButton()}>
                <View style={{alignItems:'center', marginTop:10, marginLeft:270,marginTop:40,paddingLeft:50}}>
                <Image style={{ height: 30,borderRadius:200, width:60}} source={CANCEL} />
                </View>
                </TouchableOpacity>
                </View>
                <View style={{alignItems:'center', marginTop:50,paddingTop:50}}>
                <Image style={{ height: 80,borderRadius:200, width:80}} source={TICK} />
                </View>
                
                <View >
                    <Text></Text>
                    <Text></Text>
                    <View style={{ alignItems:'center'}}>
                    <Text style={{fontSize:30,fontWeight:'bold'}}> Order Placed!</Text>
                    </View>
                    <Text></Text>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18}}>
                        Your order was placed successfully.
                    </Text>
                    <Text style={{fontSize:18, marginBottom:40,textAlign:'center'}}>For more details, check All My Orders page under Profile tab</Text>
                    </View>
                </View>


                <TouchableHighlight style={{height: 45,flexDirection: 'row',justifyContent: 'center', alignItems: 'center',marginBottom: 20,marginLeft:50,width: "80%",
      borderRadius: 30, backgroundColor: "#FF6969"}} onPress={() => this.onOrderPlacedButton()}>
                    <View style={{flexDirection:'row',borderWidth:0,justifyContent:'flex-end',width:250,alignItems:'center' }} >
                    <Text style={{    color: 'white', fontSize: 20,borderWidth:0,paddingRight:50}}>ORDER MORE</Text>
                    <Image style={{right:0,borderWidth:0,paddingTop:0}} source={ARROW} />

                    </View>
                    
                </TouchableHighlight>

            </View>
        );
    }
}

