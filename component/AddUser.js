import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {addUser} from '../services/userstorage'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

IconAntDesign.loadFont()


const AddUser = (props) => {
    let navigation = useNavigation()
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
    
        

            <View style={{flex: 1, alignItems: 'center',backgroundColor: '#f5f6f8'}}>
                <View style={{borderWidth:0,justifyContent:'flex-start',alignItems:'center',height:90,width:"100%",flexDirection:'row',paddingTop:50}}>
    
                <TouchableOpacity onPress={()=>{navigation.navigate('Login',{})}}>
            
                <IconAntDesign name='left' size ={30} color='red' style={{paddingRight:50,marginLeft:10,borderWidth:0}}/>
                </TouchableOpacity>
                </View>
                <Text style={{fontSize: 25,color:'gray',fontWeight:'bold',paddingLeft:10 }}>Add User</Text>
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

                <TouchableHighlight style={{height: 45,flexDirection: 'row',justifyContent: 'center', alignItems: 'center',marginTop: 10,marginLeft:10,width: "70%",
      borderRadius: 30, backgroundColor: "#FF6969"}} onPress={() => addToUser()}>
                    <View style={{flexDirection:'row',borderWidth:0,justifyContent:'flex-end',width:250,alignItems:'center' }} >
                    <Text style={{    color: 'white', fontSize: 20,borderWidth:0,paddingRight:70}}>Create User</Text>
                    </View>
                    
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