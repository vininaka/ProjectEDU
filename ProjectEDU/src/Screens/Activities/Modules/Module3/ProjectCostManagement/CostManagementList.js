import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import {Header,ListItem} from 'react-native-elements'
import * as firebase from 'firebase'

//Screen with list with the following modules for Project Cost Management
//Introduction
//Estimating Budget
//Detemine Budget
//Control Costs

class CostManagementList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listCost:[]
    }
  }
  componentDidMount()
  {
    let userid = firebase.auth().currentUser.uid
    let usersRef = firebase.database().ref("/module3/Project Cost Management/" + userid );
    usersRef.orderByChild("id").on("child_added", (data)=> {
      
      let newArr = [];
      let obj = {title: data.val().title,checkmark:data.val().checkmark}
      newArr.push(obj)

      let Aux = this.state.listCost;
      Array.prototype.push.apply(Aux,newArr)
      this.setState({listCost:Aux})
    })
  }
  
  render() {

    const list = this.state.listCost     
    return (
      <View >
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Module_3"),
          }}
          centerComponent={{ text: 'PROJECT COST MANAGEMENT', style: { color: '#fff' } }}
        />
      {
      list.map((l, i) => (
        <ListItem
          key={i}
          title={l.title}
          bottomDivider = {true}
          chevron = {true}
          checkmark = {l.checkmark}
          onPress = {
            (function(){
              if(l.title=="Introduction")
              {
                this.props.navigation.navigate("IntroductionVideo")
              }
              if(l.title=="Estimating")
              {
                this.props.navigation.navigate("EstimatingCost")
              }
              if(l.title=="Budgeting")
              {
                this.props.navigation.navigate("DetermineBudget")
              }
              if(l.title=="Controlling")
              {
                this.props.navigation.navigate("ControlCosts")
              }
            }).bind(this)
          }
        />
      ))
      }
        
      </View>
    );
  }
}
export default CostManagementList;

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});