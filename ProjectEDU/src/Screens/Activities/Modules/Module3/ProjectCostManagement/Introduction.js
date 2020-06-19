import React from 'react';
import { View,StyleSheet,Image,Text,Dimensions} from 'react-native';
import {Header,Card,Button} from 'react-native-elements'
import { createSwitchNavigator} from 'react-navigation'
import Modal from 'react-native-modal'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import * as firebase from 'firebase'

class PCM_IntroInfo0Screen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("ListCostManagement"),
          }}
          centerComponent={{ text: 'Introduction', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_1")
          }}
        />

        <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(1/9)*100}
              backgroundColor="#341f97"
          />
        </View>    
      </View>
    );
  }
}
class PCM_IntroInfo1Screen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>

        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("ListCostManagement"),
          }}
          centerComponent={{ text: 'Introduction', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_2")
          }}
        />
        <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(2/9)*100}
              backgroundColor="#341f97"
          />
        </View>
       
        <View style={styles.containerImages}>
          <Image
              style={styles.infoImage}
              source={{uri: 'http://apexpjm.com/wp-content/uploads/2014/04/Three-types-of-estimating-image.jpg'}}
          />
          <Image
              style={styles.infoImage}
              source={{uri: 'https://www.cpas4you.com/wp-content/uploads/2018/08/AdobeStock_113685937-72.jpg'}}
            />
        </View>
        <View style={styles.containerImages}>
          <Image
                style={styles.infoImage}
                source={{uri: 'http://jrl-consulting.ch/wp-content/uploads/2015/11/jrl-bossert-consulting-09.jpg'}}
          />
           <Image
                style={styles.infoImage}
                source={{uri: 'https://atlantachallenge.com/wp-content/uploads/2015/06/business-planning-background-1600x900.png'}}
          />
        </View>
        <Text style={styles.textInfo}>
            Project Cost Management includes the process involved 
            in estimating,budgeting and controling costs so that 
            the project can be completed within the approved budget.
        </Text>

      </View>
    );
  }
}
class PCM_IntroInfo2Screen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("ListCostManagement"),
          }}
          centerComponent={{ text: 'Cost Estimate', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_3")
          }}
        />

        <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(3/9)*100}
              backgroundColor="#341f97"
          />
        </View>
          <View style={styles.containerImages}>
          <Image
              resizeMode = 'contain'
              style={styles.infoImagePhases}
              source={{uri: 'https://d2myx53yhj7u4b.cloudfront.net/sites/default/files/styles/full_width_desktop/public/IC-Diagram-of-Project-Cost-Management-Phases.jpg'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              style={styles.infoImage}
              source={{uri: 'https://www.projectcontrolacademy.com/wp-content/uploads/2017/04/VT010-CostContingency-1000x550.png'}}
          />
          <Image
              resizeMode = 'stretch'
              style={styles.infoImage}
              source={{uri: 'https://static1.squarespace.com/static/518134dde4b0bec12a2c50dd/5b3140016d2a73f2d1ea27b8/5b314040352f535d36e4e34d/1529954370765/Cost-Estimate.jpg'}}
            />
        </View>

        <Text style={styles.textInfo}>
          Process of developing and approximation 
          of the monetary resources needed to 
          complete project activities.
        </Text>
      </View>
    );
  }
}
class PCM_IntroInfo3Screen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("ListCostManagement"),
          }}
          centerComponent={{ text: 'Determine Budget', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_4")
          }}
        />

        <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(4/9)*100}
              backgroundColor="#341f97"
        />
        </View>
         <View style={styles.containerImages}>
          <Image
              resizeMode = 'contain'
              style={styles.infoImagePhases}
              source={{uri: 'https://d2myx53yhj7u4b.cloudfront.net/sites/default/files/styles/full_width_desktop/public/IC-Diagram-of-Project-Cost-Management-Phases.jpg'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              style={styles.infoImage}
              source={{uri: 'https://wwwcdn.bigcommerce.com/www1.bigcommerce.com/assets/answers/how-determine-your-marketing-budget.jpg'}}
          />
          <Image
              style={styles.infoImage}
              source={{uri: 'https://jacquelinetavakolicom.files.wordpress.com/2017/08/budget-smaller-size.jpg'}}
            />
        </View>
         <Text style={styles.textInfo}>
          Process of aggregating the estimated costs of
          individual activities or work packages to estabilish
          an authorizes cost baseline.
        </Text>
      </View>
    );
  }
}
class PCM_IntroInfo4Screen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("ListCostManagement"),
          }}
          centerComponent={{ text: 'Control Costs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Activity_1")
          }}
        />

        <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(5/9)*100}
              backgroundColor="#341f97"
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              resizeMode = 'contain'
              style={styles.infoImagePhases}
              source={{uri: 'https://d2myx53yhj7u4b.cloudfront.net/sites/default/files/styles/full_width_desktop/public/IC-Diagram-of-Project-Cost-Management-Phases.jpg'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              resizeMode = 'stretch'
              style={styles.infoImage}
              source={{uri: 'https://www.startupdonut.co.uk/sites/default/files/controllingcosts_299887349.jpg'}}
          />
          <Image
              style={styles.infoImage}
              source={{uri: 'http://asgstrategies.com/wp-content/uploads/2014/10/a_shutterstock_106100270_manage_costs_small-e1362665858484-2.jpg'}}
            />
        </View>
         <Text style={styles.textInfo}>
          Process of monitoring the status of the project to
          update the project costs and managing changes to the
          cost baseline.
        </Text>
      </View>
    );
  }
}

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
  onPressConfirm()
  {
    if(this.state.isCorrect==true)
    {
      this.props.navigation.navigate("Activity_2")
    }
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
          onPress: () => this.props.navigation.navigate("ListCostManagement"),
          }}
          centerComponent={{ text: 'Activity', style: { color: '#fff' } }}
        />
        <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(6/9)*100}
              backgroundColor="#341f97"
          />
        </View>

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
  onPressConfirm()
  {
    if(this.state.isCorrect==true)
    {
      this.props.navigation.navigate("Activity_3")
    }
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
          onPress: () => this.props.navigation.navigate("ListCostManagement"),
          }}
          centerComponent={{ text: 'Activity', style: { color: '#fff' } }}
        />
        <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(7/9)*100}
              backgroundColor="#341f97"
          />
        </View>
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
class PCM_IntroActivity3Screen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isVisible:false,
      isCorrect:false,
      isPressed1:false,
      isPressed2:false,
      isPressed3:false,
      isPressed4:false,
      points:'',
      progress:'',
    };
}
componentWillMount(){
  let userid = firebase.auth().currentUser.uid
  let usersRef = firebase.database().ref("/users/"+userid);
  
  usersRef.on("value", (data) => {
    let points = (data.val() && data.val().points)
    this.setState({points:points})
    this.setState({progress:data.val().progress})
  });
}
  onPressConfirm()
  {
    if(this.state.isCorrect==true)
    {
      this.onUpdate()
      this.props.navigation.navigate("Reward_Final")
    }
    else
    {
      this.setState({ isVisible:true})
    }
  }
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
      usersRefLeaderboard.update({
        points:pointsLeaderboard
      })
      this.props.navigation.navigate("ListCostManagement")
  }


  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("ListCostManagement"),
          }}
          centerComponent={{ text: 'Activity', style: { color: '#fff' } }}          
        />
        <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(8/9)*100}
              backgroundColor="#341f97"
          />
        </View>
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
class PCM_IntroFinalScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    points:'',
    progress:'',
    }
  }

  componentWillMount(){
    let userid = firebase.auth().currentUser.uid
    let usersRef = firebase.database().ref("/users/"+userid);
    
    usersRef.on("value", (data) => {
      let points = (data.val() && data.val().points)
      this.setState({points:points})
      this.setState({progress:data.val().progress})
    });
  }

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

        <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(9/9)*100}
              backgroundColor="#341f97"
          />
        </View>  
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
        <Text style = {{
          textAlign: 'center',
          fontSize:20,
          margin: 30,
          backgroundColor:"#2c3e50",
          color:"#ffffff"
          }}>
          Points: {this.state.points}
        </Text>
        <Text style = {{
          textAlign: 'center',
          fontSize:20,
          margin: 30,
          backgroundColor:"#2c3e50",
          color:"#ffffff"
          }}>
          Progress: {this.state.progress}
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
      marginTop:200
    },
});

export default createSwitchNavigator(
  {
    Info_0: PCM_IntroInfo0Screen,
    Info_1: PCM_IntroInfo1Screen,
    Info_2: PCM_IntroInfo2Screen,
    Info_3: PCM_IntroInfo3Screen,
    Info_4: PCM_IntroInfo4Screen,
    Activity_1:PCM_IntroActivity1Screen,
    Activity_2:PCM_IntroActivity2Screen,
    Activity_3:PCM_IntroActivity3Screen,
    Reward_Final:PCM_IntroFinalScreen
  },
  {
    initialRouteName: 'Info_0',
    headerMode: 'none'
  }
);

