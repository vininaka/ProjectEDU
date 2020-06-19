import React, { Component } from 'react'
import { Text,ScrollView} from 'react-native'
import { Card, Button,Header} from 'react-native-elements'
   
class Activities extends Component {
   
  static navigationOptions = {
    header: null
  }
   render() {
      return (

    
      <ScrollView>
          {/* Screen Header Information*/}
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => this.props.navigation.openDrawer(),
          }}
          centerComponent={{ text: 'ACTIVITIES', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'portrait', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Perfil")
          }}
        /> 

        {/*Card Module 1*/}
        <Card
          image = {{uri:"http://www.liquidplanner.com/wp-content/uploads/HiRes-17.jpg"}}
          title='Introduction'>
          <Text style={{marginBottom: 10, textAlign: 'center'}}>
            Introduction to Project Management
          </Text>
          <Button
            type="solid"
            onPress = {() => this.props.navigation.navigate("Maintenance")}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View now' />
        </Card>

          
        {/*Card Module 2*/}
        <Card
          title='Project Management Processes	'
          image = {{uri:"data:image/png;base64,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"}}
          >
          <Text style={{marginBottom: 10, textAlign: 'center'}}>
            Basic concepts of Project Management Processes
          </Text>
          <Button
            type="solid"
            onPress = {() => this.props.navigation.navigate("Maintenance")}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View now' />
        </Card>

          
        {/*Card Module 3*/}
        <Card
          title='Project Management Knowledge Areas	'
          image = {{uri:"https://visusllc.com/images/default-source/services-platforms/discovery-process.png?sfvrsn=10327ff9_6"}}>
          <Text style={{marginBottom: 10, textAlign: 'center'}}>
            Introduction to the Knowledge areas of Project Management 
          </Text>
          <Button
            type = "solid"
            onPress = {() => this.props.navigation.navigate("Module_3")}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View now' />
        </Card>

          
        {/*Card Module 4*/}
        <Card
          image = {{uri:"https://www.itarian.com/assets-new/images/remote-access-control.png"}}
          title='Business Environment in Projects	'>
          <Text style={{marginBottom: 10, textAlign: 'center'}}>
            Basic concepts of Business Environment in Projects
          </Text>
          <Button
            type = "solid"
            onPress = {() => this.props.navigation.navigate("Maintenance")}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View now' />
        </Card>

      </ScrollView>
      )
   }
}
export default Activities;
