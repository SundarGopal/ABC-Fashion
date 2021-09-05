
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
    ScrollView
} from 'react-native';
import styles from "../Styles"
import { getUsers } from '../../services/userstorage'
import {Icon} from "react-native-elements"

export const LOGO=require('../../src/logo_fashion.jpg')

export const ARROW=require('../../src/ARROW.png')



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
       /*  loadUsers();
        user = loadUsers();
        console.log(">> on login button");
        console.log(">>", this.state.name);
        console.log(">>", USER);
        console.log(">>", this.state.password);
        console.log(">>", USER); */
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
            <ScrollView>
            <View style={styles.container}>


                <Image style={styles.LoginLogo} source={LOGO} />

                <View style={styles.LoginUpContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: "https://img.icons8.com/ios/50/000000/user--v1.png" }} />
                    <View>
                    <Text style={{paddingLeft:15,color:'grey',paddingTop:20}}>USERNAME / EMAIL</Text>
                    <TextInput style={styles.inputs}
                        selectionColor={'#FF6969'}
                        placeholder="UserName"
                        underlineColorAndroid='transparent'
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })} />
                    </View>
                </View>

                <View style={styles.LoginDownContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'https://img.icons8.com/ios/50/000000/password--v1.png' }} />
              
              <View>
              <Text style={{paddingTop:20,paddingLeft:15,color:'grey'}}>PASSWORD</Text>
              <TextInput style={styles.inputs}
                        selectionColor={'#FF6969'}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />
                </View>
                </View>

                <TouchableHighlight style={{height: 45,flexDirection: 'row',justifyContent: 'center', alignItems: 'center',marginBottom: 20,marginLeft:10,width: "80%",
      borderRadius: 30, backgroundColor: "#FF6969"}} onPress={() => this.onLoginButton()}>
                    <View style={{flexDirection:'row',borderWidth:0,justifyContent:'flex-end',width:250,alignItems:'center' }} >
                    <Text style={{    color: 'white', fontSize: 20,borderWidth:0,paddingRight:70}}>LOG IN</Text>
                    <Image style={{right:0,borderWidth:0,paddingTop:0}} source={ARROW} />
                    </View>
                    
                    </TouchableHighlight>



                


                
                    <Text style={{marginTop:40}}>Don't have an  account? Swipe right to 
                        
                        </Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Add User', {})}>
                        <Text style ={styles.addcustomerlink}> create new account </Text>
                </TouchableHighlight>
            </View>
            </ScrollView>
        );
    }
}



/* import React, { Component } from 'react';
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

export const LOGO=require('../../src/logo_fashion.jpg')

export const ARROW=require('../../src/ARROW.png')



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
                        placeholder="UserName"
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

                <TouchableHighlight style={{height: 45,flexDirection: 'row',justifyContent: 'center', alignItems: 'center',marginBottom: 20,marginLeft:10,width: "80%",
      borderRadius: 30, backgroundColor: "#FF6969"}} onPress={() => this.onLoginButton()}>
                    <View style={{flexDirection:'row',borderWidth:0,justifyContent:'flex-end',width:250,alignItems:'center' }} >
                    <Text style={{    color: 'white', fontSize: 20,borderWidth:0,paddingRight:70}}>LOG IN</Text>
                    <Image style={{right:0,borderWidth:0,paddingTop:0}} source={ARROW} />
                    </View>
                    
                    </TouchableHighlight>


                
                    <Text >Don't have an  account? Swipe right to 
                        
                        </Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Add User', {})}>
                        <Text style ={styles.addcustomerlink}> create new account </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

 */

//------------------------- NEW VERSION------------------------------