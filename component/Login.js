import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: 'Fashion App',
  };
//   state = {
//     email: 'admin',
//     password: 'admin',
//   };

  onLoginButton = () => {
    console.log('login button');
  };

  onLogoutButton = () => {};

  onForgotText = () => {
    //this.props.navigation.navigate('Forgot');
  };

  onRegister = () => {
    //this.props.navigation.navigate('Register');
  };

  render() {
    return (
      
      <View style={styles.container}>
        <Text style={{fontSize:30,marginVertical:10}}>Fashion App</Text>
  
        <View style={styles.inputContainer}>
         
          <TextInput
            style={styles.inputs}
            placeholder="UserName/Email"
            keyboardType="username"
            underlineColorAndroid="transparent"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View style={styles.inputContainer}>
         
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onLoginButton()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: 'black',
  },
  loginText: {
    color: 'white',
  },
});
