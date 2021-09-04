import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import styles from "./Styles"
import { getUsers } from '../../services/userstorage'
import {Icon} from "react-native-elements"

export const TICK=require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/Tick.png')

export const CANCEL=require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/Cancel.png')





export default class OrderPlaced extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'OrderPlaced'
    };

    onOrderPlacedButton = () => {
        this.props.navigation.navigate('Tab', { });
    }

    onOrderCancelButton = () => {
        this.props.navigation.navigate('Tab', { });
    }

    render() {
        return (
  
            <View>
                <View style={{alignItems:'center', marginTop:10, marginLeft:260}}>
                
                <Image style={{ height: 30,borderRadius:200, width:60}} source={CANCEL} />
                </View>
                <View style={{alignItems:'center', marginTop:50}}>
                <Image style={{ height: 80,borderRadius:200, width:80}} source={TICK} />
                </View>
                
                <View>
                    <Text></Text>
                    <Text></Text>
                    <Text style={{fontSize:40,fontWeight:'bold'}}> Order Placed!</Text>
                    <Text></Text>
                    <Text style={{fontSize:20}}>
                        Your order was placed successfully.
                    </Text>
                    <Text style={{fontSize:20, marginBottom:40}}>For more details, check All My Orders page under Profile tab</Text>
                </View>


                <TouchableHighlight style={[styles.buttonContainer, styles.OrderPlacedButton]} onPress={() => this.onOrderPlacedButton()}>
                    <Text >
                    <Text style={styles.loginText}>ORDER MORE</Text>

                    </Text>
                    
                </TouchableHighlight>

            </View>
        );
    }
}

