import React from 'react';
import {Image, View ,StyleSheet,TouchableWithoutFeedback,Text,TouchableHighlight,Alert} from 'react-native';
import {Header, Card} from 'react-native-elements'
import * as firebase from 'firebase'
import * as ImagePicker from 'expo-image-picker'
export default class ImagePickerExample extends React.Component {
  state = {
    image: firebase.auth().currentUser.photoURL,
    email:firebase.auth().currentUser.email,
    name:firebase.auth().currentUser.displayName,
    isPressed:false
  };

  //Function for selecting image from the device library and update
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      //updates the image link
      this.setState({ image: result.uri });
      firebase.auth().currentUser.updateProfile({
        photoURL:result.uri
      })
    }
  };
  //Function for recover user password
  async onRecoverButton (){

    this.setState({ isPressed: true })
    
    try{
      firebase.auth().sendPasswordResetEmail(this.state.email)
      .catch((error) =>{
        console.log(error)
        Alert.alert(error.message)
      })
    }
    catch (error) {
        console.log(error.toString())
        Alert.alert(error.message)
      }
    }

  render() {
    let { image } = this.state;

    //Alert that email for recover password was sent
    if(this.state.isPressed==true)
    {
      Alert.alert(
        'Recover Password',
        'The request was sent to your email',
        [
          {text: 'OK', onPress: () =>  this.setState({ isPressed: false })},
        ],
        {cancelable: false},
      );
    }
  
    return (
      <View style={styles.container}>

      {/*Screen Header Information */}
      <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () =>  this.props.navigation.goBack(),
          }}
          centerComponent={{ text: 'PROFILE UPDATE', style: { color: '#fff' } }}
        />

      {/*Card with User main information */}
      <Card containerStyle = {{backgroundColor: '#3b5998',borderRadius: 20,}}
        title = "Personal Information"
        titleStyle = {{
          fontSize:18,
          color:"#ffffff"
        }}
      >
        {/*Touchable Highlight for setting profile picture */}
        <View style = {styles.inputContainerPhoto}>
          <TouchableWithoutFeedback
          onPress={this._pickImage}>
            <Image
              source = {{uri:image}}
              style={{ width: 100, height: 100,borderRadius:20 }}
            />
          </TouchableWithoutFeedback>
          <Text style = {styles.textPhoto}>
            Change your profile picture
          </Text>
        </View>
        {/*User main information */}
        <View>
          <Text style = {styles.textInfo}>
            Name: {this.state.name}
          </Text>
          <Text style = {styles.textInfo}>
            Email: {this.state.email}
          </Text>
        </View>
      </Card>

   
      <View style = {{marginTop:40}}>
        <Text style = {styles.textInfo}>
          Want to change your password?
        </Text>
        <Text style = {styles.textInfo}>
        Click on the button below
        </Text>
      </View>
      
         {/*Button - Recover Password */}
      <TouchableHighlight style={[styles.buttonContainer, styles.recoverButton]} onPress={this.onRecoverButton.bind(this)}>
          <Text style={styles.recoverText}>Change Password</Text>
      </TouchableHighlight>

    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  inputContainerPhoto: {
    marginBottom:0,
    marginTop: 30,
    flexDirection: 'column',
    alignItems:'center'
},
textInfo: {
  marginBottom:20,
  fontSize:16,
  textAlign:"center",
  color:"#ffffff"
},
textPhoto: {
  marginTop:20,
  marginBottom:20,
  fontSize:12,
  textAlign:"center",
  color:"#ffffff"
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
recoverButton: {
  backgroundColor: "#000000",
},
recoverText: {
  color: 'white',
},
});
 