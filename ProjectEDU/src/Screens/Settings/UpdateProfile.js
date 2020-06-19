import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import * as firebase from 'firebase';

export default class updateProfileScreen extends Component {

  constructor(props) {
    super(props);
    state = {
      password: '',
      errorMessage: 'null',
    }
  }

  static navigationOptions = {
    headerTitle:"Update your Password"
  }

    async OnLogout() {
        try {
            await firebase.auth().signOut()
            .then(() => this.props.navigation.navigate('LoginScreen'))
            console.log("Logged Out!");
        } catch (error) {
            console.log(error);
        }
    }   

  async onUpdatePress(){      
    const{password} = this.state;
    try {
        firebase.auth().currentUser.updatePassword(password)
        console.log("Password Updated");
        this.OnLogout()
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
      <View style={styles.container}>        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} 
        onPress={this.onUpdatePress.bind(this)}>
          <Text style={styles.signUpText}>Update</Text>
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
    backgroundColor: '#B0E0E6',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#3498db",
  },
  signUpText: {
    color: 'white',
  }
});
 