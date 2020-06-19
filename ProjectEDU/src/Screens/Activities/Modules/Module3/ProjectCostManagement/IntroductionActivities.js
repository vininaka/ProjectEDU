import React from 'react';
import { View,StyleSheet,Image,Text,Dimensions, Alert} from 'react-native';
import {Header,Card,Button} from 'react-native-elements'
import { createSwitchNavigator} from 'react-navigation'
import Modal from 'react-native-modal'
import * as firebase from 'firebase'
import moment from 'moment'

//Question 1
class PCM_IntroActivity1Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible:false,
      isCorrect:false,
      isPressed1:false,
      isPressed2:false,
      isPressed3:false,
      isPressed4:false
    };
}

  //Function that analyses if the question is correct
  onPressConfirm()
  {
    //If the answer is corret go to another question
    if(this.state.isCorrect==true)
    {
      this.props.navigation.navigate("PCM_IntroActivity2")
    }
    //Shows a modal - Wrong Answer
    else
    {
      this.setState({ isVisible:true})
    }
  }
   
 
  render() {
    return (
      <View style={styles.container}>
        {/*Header Screen Information */}
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => Alert.alert(
            'Warning',
            'If you leave, your progress will be lost.',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress:  () => this.props.navigation.navigate("ListCostManagement")},
            ],
            {cancelable: false},
          ),
          }}
          centerComponent={{ text: 'Activity', style: { color: '#fff' } }}
        />
  
      {/*Question 1 
        Each card represents a choice
      */}
      <Text style={styles.textTitle} >
          Which process are included in the Project Cost Management?
      </Text>
      <Card>
        <Button
            title='Estimate Costs, Determine Schedule and Control Budget' 
            onPress = {
              (function(){
                this.setState({ isPressed1:true})
                this.setState({ isPressed2: false })
                this.setState({ isPressed3: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect:false})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed1
                ? styles.buttonPress
                : styles.button
            }
        />
      </Card>
      <Card>
        <Button
            title='Estimate Costs, Determine Budget and Control Costs' 
            onPress = {
              (function(){
                this.setState({ isPressed2:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed3: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect: true })
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed2
                ? styles.buttonPress
                : styles.button
            }
        />
      </Card>
      <Card>
        <Button
            title='Estimate Costs, Determine Schedule and Control Costs' 
            onPress = {
              (function(){
                this.setState({ isPressed3:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed2: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect:false})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed3
                ? styles.buttonPress
                : styles.button
            } 
          />
      </Card>
      <Card>
        <Button
            title='Estimate Costs, Determine Budget and Control Schedule' 
            onPress = {
              (function(){
                this.setState({ isPressed4:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed2: false })
                this.setState({ isPressed3: false })
                this.setState({ isCorrect:false})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed4
                ? styles.buttonPress
                : styles.button
            }
          />
      </Card>
      <Button
            onPress = {this.onPressConfirm.bind(this)}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:20,backgroundColor:'#10ac84'}}
            title='Confirm' />

      {/*Modal - Wrong Answer */}
      <Modal isVisible={this.state.isVisible}>
        <View style={styles.modalContainer}>
          <Image
              style={styles.infoImageOverlay}
              source={{uri: 'https://media.istockphoto.com/illustrations/try-again-label-illustration-id505716206'}}
          />
          <Button
            onPress = {() => this.setState({isVisible:false})}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:25 }}
            title='Go Back' 
          />
        </View>
      </Modal>
      </View>
    );
  }
}
//Question 2
class PCM_IntroActivity2Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible:false,
      isCorrect:false,
      isPressed1:false,
      isPressed2:false,
      isPressed3:false,
      isPressed4:false
    };
}
//Function that analyses if the question is correct
  onPressConfirm()
  {
    //If the answer is corret go to another question
    if(this.state.isCorrect==true)
    {
      this.props.navigation.navigate("PCM_IntroActivity3")
    }
    //Shows a modal - Wrong Answer
    else
    {
      this.setState({ isVisible:true})
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => Alert.alert(
            'Warning',
            'If you leave, your progress will be lost.',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress:  () => this.props.navigation.navigate("ListCostManagement")},
            ],
            {cancelable: false},
          ),
          }}
          centerComponent={{ text: 'Activity', style: { color: '#fff' } }}
        />
    
        {/*Question 2 */}
        <Text style={styles.textTitle} >
          The Project Cost Management comprises the following activities:
        </Text>
        <Text style={styles.textSubTitle} >
          a) Determine Budget
        </Text>
        <Text style={styles.textSubTitle} >
          b) Plan Cost Management
        </Text>
        <Text style={styles.textSubTitle} >
          c) Estimate Costs
        </Text>
        <Text style={styles.textSubTitle} >
          d) Control Costs
        </Text>

        <Card>
        <Button
            title='a - b - c - d' 
            onPress = {
              (function(){
                this.setState({ isPressed1:true})
                this.setState({ isPressed2: false })
                this.setState({ isPressed3: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect:false})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed1
                ? styles.buttonPress
                : styles.button
            }
        />
      </Card>

      <Card>
        <Button
            title='c - a - b - d' 
            onPress = {
              (function(){
                this.setState({ isPressed2:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed3: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect: false })
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed2
                ? styles.buttonPress
                : styles.button
            }
        />
      </Card>

      <Card>
        <Button
            title='b - c - a - d' 
            onPress = {
              (function(){
                this.setState({ isPressed3:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed2: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect:true})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed3
                ? styles.buttonPress
                : styles.button
            } 
          />
      </Card>

      <Card>
        <Button
            title='a - c - b - d' 
            onPress = {
              (function(){
                this.setState({ isPressed4:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed2: false })
                this.setState({ isPressed3: false })
                this.setState({ isCorrect:false})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed4
                ? styles.buttonPress
                : styles.button
            }
          />
      </Card>

      <Button
            onPress = {this.onPressConfirm.bind(this)}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:5,backgroundColor:'#10ac84' }}
            title='Confirm' />

      {/*Modal - Wrong Answer */}
      <Modal isVisible={this.state.isVisible}>
        <View style={styles.modalContainer}>
          <Image
              style={styles.infoImageOverlay}
              source={{uri: 'https://media.istockphoto.com/illustrations/try-again-label-illustration-id505716206'}}
          />
          <Button
            onPress = {() => this.setState({isVisible:false})}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:25 }}
            title='Go Back' 
          />
        </View>
      </Modal>


      </View>
    );
  }
}
//Question 3
class PCM_IntroActivity3Screen extends React.Component {
  
  state = {
      isVisible:false,
      isCorrect:false,
      isPressed1:false,
      isPressed2:false,
      isPressed3:false,
      isPressed4:false,
      points:'',
      progress:'',
  }

//Receives user information from the database
componentDidMount(){

  //Receives the user uuid(primary key)
  let userid = firebase.auth().currentUser.uid
  let usersRef = firebase.database().ref("/users/"+userid);
  
  //Receive points and progress
  usersRef.on("value", (data) => {
    let points = (data.val() && data.val().points)
    this.setState({points:points})
    this.setState({progress:data.val().progress})
  });
}
  //Analyses if the answer is correct
  onPressConfirm()
  {
    if(this.state.isCorrect==true)
    {
      this.onUpdate()
      this.props.navigation.navigate("PCM_IntroReward_Final")
    }
    else
    {
      this.setState({ isVisible:true})
    }
  }
  //Update user information if the answer is correct
  onUpdate()
  {
      let points = this.state.points;
      points = points + 200;
      pointsLeaderboard = (-1)*points
      let userid = firebase.auth().currentUser.uid
      let usersRef = firebase.database().ref("/users/"+userid);
      var usersRefLeaderboard = firebase.database().ref("/leaderbords/"+userid);
      usersRef.update({
        points:points
      });
      //Update leaderboards table for the ranking
      usersRefLeaderboard.update({
        points:pointsLeaderboard
      })
      //Checkmark the module
      firebase.database().ref("/module3/Project Cost Management/" + userid + "/Introduction").update({
        checkmark:true
      })

      //Updating the table statistics
      var upStatistic = firebase.database().ref("/statistics/" +userid)
      upStatistic.once("value",snapshot =>
      {
        //Checks if the day exist at the table statistics
        if(snapshot.hasChild(moment(new Date()).format('YYYY-MM-DD')))
        {
            //Update the points
            let auxPoints = snapshot.child(moment(new Date()).format('YYYY-MM-DD')).val().points
            auxPoints = auxPoints + 200
            firebase.database().ref("/statistics/" +userid + "/" + moment(new Date()).format('YYYY-MM-DD'))
            .update({
              points:auxPoints
            })
        }
        else
        {
          //Create the day at the table statistics
          //Initialize table
          firebase.database().ref("/statistics/" +userid + "/" + moment(new Date()).format('YYYY-MM-DD'))
            .set({
              points:200,
              date:moment(new Date()).format('MM-DD')
            })
        }
      })
  }


  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => Alert.alert(
            'Warning',
            'If you leave, your progress will be lost.',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress:  () => this.props.navigation.navigate("ListCostManagement")},
            ],
            {cancelable: false},
          ),
          }}
          centerComponent={{ text: 'Activity', style: { color: '#fff' } }}          
        />
        {/*Question 3 */}
          <Text style={styles.textTitle} >
          The process of monitoring the status of the project to update
          the project costs and managing changes to the cost baseline
          is known as: 
        </Text>

        <Card>
        <Button
            title='Estimate Costs' 
            onPress = {
              (function(){
                this.setState({ isPressed1:true})
                this.setState({ isPressed2: false })
                this.setState({ isPressed3: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect:false})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed1
                ? styles.buttonPress
                : styles.button
            }
        />
      </Card>

      <Card>
        <Button
            title='Determine Budget' 
            onPress = {
              (function(){
                this.setState({ isPressed2:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed3: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect: false })
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed2
                ? styles.buttonPress
                : styles.button
            }
        />
      </Card>

      <Card>
        <Button
            title='Control Costs' 
            onPress = {
              (function(){
                this.setState({ isPressed3:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed2: false })
                this.setState({ isPressed4: false })
                this.setState({ isCorrect:true})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed3
                ? styles.buttonPress
                : styles.button
            } 
          />
      </Card>

      <Card>
        <Button
            title='Monitoring Baseline' 
            onPress = {
              (function(){
                this.setState({ isPressed4:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed2: false })
                this.setState({ isPressed3: false })
                this.setState({ isCorrect:false})
              }).bind(this)
            }
            buttonStyle={
              this.state.isPressed4
                ? styles.buttonPress
                : styles.button
            }
          />
      </Card>

      <Button
            onPress = {this.onPressConfirm.bind(this)}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:35,backgroundColor:'#10ac84' }}
            title='Confirm' />

      <Modal isVisible={this.state.isVisible}>
        <View style={styles.modalContainer}>
          <Image
              style={styles.infoImageOverlay}
              source={{uri: 'https://media.istockphoto.com/illustrations/try-again-label-illustration-id505716206'}}
          />
          <Button
            onPress = {() => this.setState({isVisible:false})}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:25 }}
            title='Go Back' 
          />
        </View>
      </Modal>
      </View>
    );
  }
}
//Final Screen - Shows user reward for finishing the module
class PCM_IntroFinalScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("ListCostManagement")
          }}
          centerComponent={{ text: 'Final Report', style: { color: '#fff' } }}
        />
  
        <View style = {{
            marginTop:20,
            alignItems: 'center',
            margin: 10,
        }}>
          <Image
              resizeMode = "contain"
              style={{
                width: 300, 
                height: 300,
            }}
              source={{uri: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1781780/300/200/m1/fpnw/wm0/8-.jpg?1502353731&s=c8f94b3997dc579040e292f3b4a4edd2'}}
            />
        </View>
        <Text style = {{
          textAlign: 'center',
          fontSize:20,
          margin: 30,
          }}>
          You have won 200 points
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    textTitle:{
      textAlign:'center',
      fontSize:20,
      marginTop:20,
      marginBottom: 20
    },
    textSubTitle:{
      textAlign:'center',
      fontSize:15,
      marginTop:0,
      marginBottom: 5
    },
    textInfo:{
        textAlign:'center',
        fontSize:20,
        margin:10,
        marginTop:40,
        color:"white",
        backgroundColor:"#54a0ff"       
    },
    containerProgress:{
      marginTop:5,
      alignItems: 'center',
    },
    containerImages:{
        marginTop:20,
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems: 'center',
        margin: 10,
    },
    infoImagePhases:{
      width: 350, 
      height: 150,
    },
    infoImage:{
        width: 150, 
        height: 150,
    },
    infoImageOverlay:{
      width: 300, 
      height: 300,
  },
    button: {
      borderRadius: 0, 
      marginLeft: 0, 
      marginRight: 0, 
      marginBottom: 0
    },
    buttonPress: {
      borderRadius: 0, 
      marginLeft: 0, 
      marginRight: 0, 
      marginBottom: 0,
      backgroundColor:"#f40331"
    },
    modalContainer:{
      backgroundColor:"#ffffff",
      flex:1,
      alignItems: 'center',
      marginTop:200,
      height:Dimensions.get('window').height
    },
});

export default createSwitchNavigator(
  {
    PCM_IntroActivity1:PCM_IntroActivity1Screen,
    PCM_IntroActivity2:PCM_IntroActivity2Screen,
    PCM_IntroActivity3:PCM_IntroActivity3Screen,
    PCM_IntroReward_Final:PCM_IntroFinalScreen
  },
  {
    headerMode: 'none'
  }
);

