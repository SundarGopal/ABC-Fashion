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
import {addUser} from '../services/userstorage'

const AddUser = (props) => {
    const [name, onChangeName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    
    var addToUser =  () => {
        var user={
            name,password
        };
        console.log(user);
        user.id= Math.random()*(1000+20)-3;
         addUser(user);
        props.navigation.navigate('Login', {});
    }

        return (
            <View style={styles.container}>
                <View style={styles.topInput}>
                    <TextInput style={styles.inputs}
                        placeholder="Username"
                        underlineColorAndroid='transparent'
                        value={name}
                        onChangeText={onChangeName} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={password}
                        onChangeText={onChangePassword} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => addToUser()}>
                    <Text style={styles.loginText}>Create User</Text>
                </TouchableHighlight>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        paddingTop:50
    },
    topInput:{
        marginTop:30,
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        marginTop:10,
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    button: {
        padding: 10,
        alignItems: "center",
        marginTop: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: "space-between",
        backgroundColor: "#109cd8",
        borderRadius:15,
        padding: 10
      },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});

export default AddUser;