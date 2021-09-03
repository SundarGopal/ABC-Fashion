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
import styles from "../Styles"
import { getUsers } from '../../services/userstorage'
import {Icon} from "react-native-elements"

export const LOGO=require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/logo_fashion.jpg')

export const ARROW=require('/Users/a845596yara.com/workspace/workspace-fashion/FashionApp/src/ARROW.png')



USER = {}
let loadUsers = async () => {
    user = await getUsers()
    console.log("hhhhhhhhh", user);
    USER = user
}

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Login'
    };
    state = {
        name: '',
        password: ''
    }

    onLoginButton = () => {
        loadUsers();
        user = loadUsers();
        console.log(">> on login button");
        console.log(">>", this.state.name);
        console.log(">>", USER);
        console.log(">>", this.state.password);
        console.log(">>", USER);
        if ((this.state.name == this.state.password)) {
            this.props.navigation.navigate('Tab', { name: this.state.name });
            this.setState({
                name: '',
                password: ''
            });

        } else {
            alert('Username/Password is invalid');
        }
    }

    onForgotText = () => {
        //this.props.navigation.navigate('Forgot');
    }

    onRegister = () => {
        //this.props.navigation.navigate('Register');
    }

    render() {
        return (
            <View style={styles.container}>

                <Image style={styles.LoginLogo} source={LOGO} />

                <View style={styles.LoginUpContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: "https://img.icons8.com/ios/50/000000/user--v1.png" }} />
                    <TextInput style={styles.inputs}
                        placeholder="Name"
                        underlineColorAndroid='transparent'
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })} />
                </View>

                <View style={styles.LoginDownContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'https://img.icons8.com/ios/50/000000/password--v1.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text >
                    <Text style={styles.loginText}>LOG IN</Text>
                    {/* <Image source={ARROW} /> */}
                    {/* <Icon name='arrow-right-bold-circle'/> */}
                    </Text>
                    
                </TouchableHighlight>

                


                
                    <Text >Doesn't have an  account? Swipe right to 
                        
                        </Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Add User', {})}>
                        <Text style ={styles.addcustomerlink}> create new account </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

