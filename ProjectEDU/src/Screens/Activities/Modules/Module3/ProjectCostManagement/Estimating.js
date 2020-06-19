import React from 'react';
import { View,StyleSheet,Image,Text,Dimensions} from 'react-native';
import {Header,Card,Button} from 'react-native-elements'
import { createSwitchNavigator} from 'react-navigation'
import Modal from 'react-native-modal'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import * as firebase from 'firebase'

class PCM_EstimatingInfo0Screen extends React.Component {
 
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
          centerComponent={{ text: 'Estimate Costs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_1")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(1/23)*100}
              backgroundColor="#341f97"
          />
        </View>

        <Text style={styles.textTitle}>
           Direct Costs
        </Text>
        <Text style={styles.textInfo}>
            Expenses that are billed directly to the project.
            Can be tracked back to a product and can be measured.
        </Text>
        <Text style={{textAlign:'left',marginLeft:10,fontSize:15,marginTop:10}}>
           Examples:
        </Text>
        <Text style={styles.textSubTitle}>
          - Direct Materials
        </Text>
        <Text style={styles.textSubTitle}>
          - Direct Labor
        </Text>
        <Text style={styles.textSubTitle}>
          - Use of equipment
        </Text>
        <Text style={styles.textSubTitle}> 
          - Use of facilities
        </Text>
        <Text style={styles.textSubTitle}>
          - Number of employees
        </Text>
        <Text style={styles.textSubTitle}>
          - Comsumption of services
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://www.miltons.law.za/wp-content/uploads/2019/02/employees.jpg'}}
          />
           <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://2.bp.blogspot.com/-FTyU2vf566E/WY5X1NNClkI/AAAAAAAANug/TssPLv68tvEzQ3FT-PaQFhBT5XL-vLOsgCLcBGAs/s640/IMAGEM%2B1756%2B-%2BGEST%25C3%2583O%2BDE%2BFACILITIES%2B-%2BO%2BBLOG%2BDO%2BMESTRE.png'}}
            />
        </View>
        <View style={styles.containerImages}>
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://www.abseconschools.org/cms/lib/NJ50000208/Centricity/Domain/44/facilitymanagment.jpg'}}
          />
           <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'http://www.redealix.org.br/stellamaris/wp-content/uploads/sites/3/2017/11/16.jpg'}}
            />
        </View> 

      </View>
    );
  }
}
class PCM_EstimatingInfo1Screen extends React.Component {
 
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
          centerComponent={{ text: 'Estimate Costs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_2")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(2/23)*100}
              backgroundColor="#341f97"
          />
        </View>

        <Text style={styles.textTitle}>
           Indirect Costs
        </Text>
        <Text style={styles.textInfo}>
           Not directly identifiable and not directly related to the project product.
           Belong to the core supporting business, but cannot be directly assigned
           to the projects or individual contracts.
        </Text>
        <Text style={{textAlign:'left',marginLeft:10,fontSize:15,marginTop:10}}>
           Examples:
        </Text>
        <Text style={styles.textSubTitle}>
          - Fringe Benefits
        </Text>
        <Text style={styles.textSubTitle}>
          - Indirect Manufacturing expenses
        </Text>
        <Text style={styles.textSubTitle}>
          - Administrative Expenses
        </Text>

        <View style={styles.containerImages}>
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://www.acsh.org/sites/default/files/styles/article-content/public/images/shutterstock_507716419.jpg?itok=RLaDIGBs'}}
          />
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'http://fringebenefitstv.com/wp-content/uploads/2012/03/FB_logo_final-Hi.jpg'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/six-sigma-role-manufacturing-industry-rar406-article.jpg'}}
          />
           <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://content-static.upwork.com/blog/uploads/sites/3/2017/10/23085559/Administrative-Assistant-Job-Description-feature-940x400.jpg'}}
            />
        </View> 

      </View>
    );
  }
}
class PCM_EstimatingInfo2Screen extends React.Component {
 
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
          centerComponent={{ text: 'Estimate Costs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_3")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(3/23)*100}
              backgroundColor="#341f97"
          />
        </View>

        <Text style={styles.textTitle}>
           Variable Costs
        </Text>
        <Text style={styles.textInfo}>
           Vary as changes in the production are implemented
        </Text>
        <Text style={{textAlign:'left',marginLeft:10,fontSize:15,marginTop:10}}>
           Examples:
        </Text>
        <Text style={styles.textSubTitle}>
          - Expenses with equipments and materials
        </Text>
        <Text style={styles.textSubTitle}>
          - Performance bonuses
        </Text>
        <Text style={styles.textSubTitle}>
          - Freight
        </Text>
        <Text style={styles.textSubTitle}>
          - Sales Comissions
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://previews.123rf.com/images/hstrongart/hstrongart1705/hstrongart170500511/78257241-variable-cost-in-red-stamp-style-white-background.jpg'}}
          />
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://freightservices.greencarrier.com/wp-content/uploads/2017/05/shutterstock_617992466-2.jpg'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://d2ydtwisqcxv72.cloudfront.net/sales-commission-plan-header.png'}}
          />
           <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'http://propluginmarketplace.com/wp-content/uploads/2016/07/affiliatewp-performance-bonuses.png'}}
            />
        </View> 
        <Text style={{
          textAlign:'center',
          fontSize:17,
          margin:10,
          color:"white",
          backgroundColor:"#54a0ff"  
        }}>
           There's no production, there's variable cost
        </Text>

      </View>
    );
  }
}
class PCM_EstimatingInfo3Screen extends React.Component {
 
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
          centerComponent={{ text: 'Estimate Costs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_4")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(4/23)*100}
              backgroundColor="#341f97"
          />
        </View>

        <Text style={styles.textTitle}>
           Fixed Costs 
        </Text>
        <Text style={styles.textInfo}>
           Remain constant in the total independently of the 
           amount of work performed. Remain the same even,
           whe the production pauses, or is null.
        </Text>
        <Text style={{textAlign:'left',marginLeft:10,fontSize:15,marginTop:10}}>
           Examples:
        </Text>
        <Text style={styles.textSubTitle}>
          - Rent
        </Text>
        <Text style={styles.textSubTitle}>
          - Depreciation
        </Text>
        <Text style={styles.textSubTitle}>
          - Administrative Team Salaries
        </Text>
        <Text style={styles.textSubTitle}>
          - General Expenses
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2016/03/dreamstime_m_52179744-1-e1456892610537.jpg'}}
          />
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://selfgrasp.com/wp-content/uploads/2018/06/What-is-Depreciation.png'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://cdn2.iconfinder.com/data/icons/startup-and-development-4/96/Modern_Business_1_general_expenses-512.png'}}
          />
           <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg'}}
            />
        </View>     
      </View>
    );
  }
}
class PCM_EstimatingInfo4Screen extends React.Component {
 
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
          centerComponent={{ text: 'Estimate Costs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_5")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(5/23)*100}
              backgroundColor="#341f97"
          />
        </View>

        <Text style={styles.textTitle}>
           Estimating the Costs 
        </Text>
        <Text style={styles.textInfo}>
            Process of developing an approximation of the 
            monetary resources needed to complete project 
            activities.
        </Text>
        <Text style={styles.textSubTitle}>
          - Weighing alternative options
        </Text>
        <Text style={styles.textSubTitle}>
          - Examining Risks
        </Text>
        <Text style={styles.textSubTitle}>
          - Trade Offs
        </Text>
        <Text style={styles.textSubTitle}>
          - Build X Buy and Buy X Lease
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://cdn-images-1.medium.com/max/1600/1*D1euW219UdxafVeOjqvzNA.png'}}
          />
           <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'https://unlearnwithus.files.wordpress.com/2018/05/alternative-option.gif'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'data:image/jpeg;base64,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'}}
          />
          <Image
              resizeMode="contain"
              style={styles.infoImage}
              source={{uri: 'http://kobplanrealty.com/wp-content/uploads/2013/12/buy1.jpg'}}
          />
        </View>
        <Text style={{
          textAlign:'center',
          fontSize:17,
          margin:10,
          color:"white",
          backgroundColor:"#54a0ff"  
        }}>
           Determines the amount of cost required to complete project work.
        </Text>
       
      </View>
    );
  }
}
class PCM_EstimatingInfo5Screen extends React.Component {
 
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
          centerComponent={{ text: 'Estimate Costs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_6")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(6/23)*100}
              backgroundColor="#341f97"
          />
        </View>

        <Text style={styles.textTitle}>
           Inputs
        </Text>
        <Text style={styles.textInfo}>
           - Scope Baseline
        </Text>
        <Text style={styles.textInfo}>
           - Project Schedule
        </Text>
        <Text style={styles.textInfo}>
           - Human Resource Plan
        </Text>
        <Text style={styles.textInfo}>
           - Risk Register
        </Text>
        <Text style={styles.textInfo}>
           - Enterprise Enviromental Factors
        </Text>
        <Text style={styles.textInfo}>
           - Organizational Process Assets
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode = "contain"
              style={{
                width: 250, 
                height: 250
              }}
              source={{uri: 'https://vmguru.com/wp-content/uploads/2018/10/inputs.png'}}
          />
        </View>
        
      </View>
    );
  }
}
class PCM_EstimatingInfo6Screen extends React.Component {
 
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
          centerComponent={{ text: 'Estimate Costs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_7")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(7/23)*100}
              backgroundColor="#341f97"
          />
        </View>

        <Text style={styles.textTitle}>
           Tools and Techniques
        </Text>
        <Text style={styles.textInfo}>
           - Expert Judgement
        </Text>
        <Text style={styles.textInfo}>
           - Analogous Estimating
        </Text>
        <Text style={styles.textInfo}>
           - Parametric Estimating
        </Text>
        <Text style={styles.textInfo}>
           - Bottom-Up Estimating
        </Text>
        <Text style={styles.textInfo}>
           - Three-Point Estimating
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://blog.ganttpro.com/wp-content/uploads/2017/07/Estimating-techniques.jpg'}}
          />
        </View>
        
      </View>
    );
  }
}
class PCM_EstimatingInfo7Screen extends React.Component {
 
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
          centerComponent={{ text: 'Estimate Costs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_8")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(8/23)*100}
              backgroundColor="#341f97"
          />
        </View>

        <Text style={styles.textTitle}>
          Tools and Techniques
        </Text>
        <Text style={styles.textInfo}>
           - Cost of Quality
        </Text>
        <Text style={styles.textInfo}>
           - PM Estimating Software
        </Text>
        <Text style={styles.textInfo}>
           - Vendor Bid Analysis
        </Text>
        <Text style={styles.textInfo}>
           - Reserve Analysis
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://www.sev1tech.com/wp-content/uploads/2017/03/top-5-knowledge-management-tools-and-techniques.png'}}
          />
        </View>
      </View>
    );
  }
}
class PCM_EstimatingInfo8Screen extends React.Component {
 
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
          centerComponent={{ text: 'Tools and Techniques', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_9")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(9/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          Expert Judgement
        </Text>
        <Text style={styles.textInfo}>
            Guided by historical information, provides valuable
            insight about environment, and information from 
            prior similar projects.
        </Text>
        <Text style={styles.textInfo}>
            Expert judgement can also be used to determine,
            whether to combine methods of estimatin, and how to
            reconcile differences between them less accurate.
        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://cdn-images-1.medium.com/max/1600/0*wTQC4AnAd9Zc1D19.png'}}
          />
        </View>
      </View>
    );
  }
}
class PCM_EstimatingInfo9Screen extends React.Component {
 
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
          centerComponent={{ text: 'Tools and Techniques', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_10")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(10/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          Analogous Estimating
        </Text>
        <Text style={styles.textInfo}>
            Relies on the actual cost of previous similiar 
            projects, as the basis for estimating the cost 
            of the current project.

        </Text>
        <Text style={styles.textInfo}>
            Analogous cost estimating uses historical information,
            and expert judgment. Generally less costly, and less
            time consuming than other techniques, but also generally
            less acurate

        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 250, 
                height: 250
              }}
              source={{uri: 'http://1.bp.blogspot.com/--CCXb8eldyQ/U0Y70CFTfrI/AAAAAAAAO1k/IVBbGXeQ7Jk/s1600/3point.jpg'}}
          />
        </View>
      </View>
    );
  }
}
class PCM_EstimatingInfo10Screen extends React.Component {
 
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
          centerComponent={{ text: 'Tools and Techniques', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_11")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(11/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          Parametric Estimating
        </Text>
        <Text style={styles.textInfo}>
            Uses a statistiacal relationship between historical
            data and other variables. It envolves multipying, the 
            planned quantity of work to be performed, be the historical
            cost per unity, to obtaion the estimated cost.

        </Text>
        <Text style={styles.textInfo}>
            Can produce higher levels of accuracy, depending upon
            the sophistication.

        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'http://strikingprojectmanagement.com/wp-content/uploads/2013/02/Parametric-Estimating-300x150.png'}}
          />
        </View>
      </View>
    );
  }
}
class PCM_EstimatingInfo11Screen extends React.Component {
 
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
          centerComponent={{ text: 'Tools and Techniques', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_12")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(12/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          Bottom-up Estimating
        </Text>
        <Text style={styles.textInfo}>
            Involves estimating the cost of individual work
            packages, or individual schedule activities. Rolled
            to higher levels for reporting and tracking purposes.

        </Text>
        <Text style={styles.textInfo}>
            Typically motivated by the size, and complexity of
            the individual schedule activity, or work package.

        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQ1Y02cFIMj1OzpNGhGJkSqb0ILoJax967EmsY2J5o8bVrc8J'}}
          />
        </View>
      </View>
    );
  }
}
class PCM_EstimatingInfo12Screen extends React.Component {
 
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
          centerComponent={{ text: 'Tools and Techniques', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_13")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(13/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          Three-Point Estimating
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode="stretch"
              style={{
                width: 300, 
                height: 200
              }}
              source={{uri: 'https://www.justacademy.co/wp-content/uploads/2016/04/Parametric_estimating.jpg'}}
          />
        </View>

        <Text style={styles.textInfo}>
           Program Evaluation Estimate and Review Techinique(PERT)

        </Text>
        <Text style={styles.textInfo}>
          PERT uses it to define an approximate range for
          and activities cost
        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 200, 
                height: 200
              }}
              source={{uri: 'https://www.guru99.com/images/TestManagement/testmanagement_article_2_2_10.png'}}
          />
        </View>
      </View>
    );
  }
}
class PCM_EstimatingInfo13Screen extends React.Component {
 
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
          centerComponent={{ text: 'Tools and Techniques', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_14")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(14/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          Reserve Analysis
        </Text>
        <Text style={styles.textInfo}>
            Evaluates risks by making financial allowances
            for them, in the projects funding requirements.
        </Text>
        <Text style={styles.textInfo}>
            Contingency reserves: allowances for unplanned
            challenges raised from risk.
        </Text>
        <Text style={styles.textInfo}>
           Management reserves: budget reserved for unplanned
           changes (scope and cost)

        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://blog.masterofproject.com/wp-content/uploads/2017/07/Reserve-Analysis-1-750x410.jpg'}}
          />
        </View>
      </View>
    );
  }
}
class PCM_EstimatingInfo14Screen extends React.Component {
 
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
          centerComponent={{ text: 'Tools and Techniques', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_15")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(15/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          PM Estimating Software
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='stretch'
              style={{
                width: 300, 
                height: 200
              }}
              source={{uri: 'https://www.binfire.com/templates/landing/img/ebooks/software_buyer/img/benefits.png'}}
          />
        </View>
        
        <Text style={styles.textInfo}>
            Project Management software application, computerized
            spreadsheets, simulation, and statistical tools are used
            to assist with cost estimating.
        </Text>
       
        
        <View style={styles.containerImages}>
          <Image
              resizeMode='stretch'
              style={{
                width: 250, 
                height: 150
              }}
              source={{uri: 'https://project-management.com/wp-content/uploads/2018/10/top-5-psa-pm-image.png'}}
          />
        </View>
      </View>
    );
  }
}
class PCM_EstimatingInfo15Screen extends React.Component {
 
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
          centerComponent={{ text: 'Tools and Techniques', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_16")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(16/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          Vendor Bid Analysis
        </Text>
        <Text style={styles.textInfo}>
          A technique used when working with suppliers on
          uncertain activities. Gathering information from
          vendors to help in estabilishing cost estimates.
        </Text>
        <Text style={styles.textInfo}>
            Requesting bids or quotes, with some of your
            trusted vendor sources for estimates.

        </Text>
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'http://strikingprojectmanagement.com/wp-content/uploads/2013/02/Vendor-Bid-Analysis-300x150.png'}}
          />
        </View>
      </View>
    );
  }
}
class PCM_EstimatingInfo16Screen extends React.Component {
 
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
          centerComponent={{ text: 'Estimate Costs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_17")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(17/23)*100}
              backgroundColor="#341f97"
          />
        </View>

        <Text style={styles.textTitle}>
          Outputs
        </Text>
        <Text style={styles.textInfo}>
           - Activity Costs Estimates
        </Text>
        <Text style={styles.textInfo}>
           - Basis of Estimates
        </Text>
        <Text style={styles.textInfo}>
           - Project Document Updates
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://acctivate.com/wp-content/uploads/2015/06/Supply-chain-and-inventory-management-inputs-and-outputs.jpg'}}
          />
        </View>
      </View>
    );
  }
}
class PCM_EstimatingInfo17Screen extends React.Component {
 
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
          centerComponent={{ text: 'Outputs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_18")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(18/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          Activity Costs Estimates
        </Text>
        <Text style={styles.textInfo}>
          Quantitative assessment of the probable cost required to
          complete project work.
        </Text>
        <Text style={{textAlign:'left',marginLeft:10,fontSize:15,marginTop:10}}>
           Examples:
        </Text>
        <Text style={styles.textSubTitle}>
          - Direct Labor
        </Text>
        <Text style={styles.textSubTitle}>
          - Materials
        </Text>
        <Text style={styles.textSubTitle}>
          - Equipment
        </Text>
        <Text style={styles.textSubTitle}>
          - Services
        </Text>
        <Text style={styles.textSubTitle}>
          - Facilities
        </Text>      
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 100, 
                height: 150
              }}
              source={{uri: 'https://www.sema.org/system/files/images/tools_copy_2.jpg'}}
          />
        </View>
        <View style={styles.containerImages}>
          <Image
              resizeMode='stretch'
              style={{
                width: 250, 
                height: 200
              }}
              source={{uri: 'https://cdn.lynda.com/course/674588/674588-636576649599254827-16x9.jpg'}}
          />
        </View>
        
      </View>
    );
  }
}
class PCM_EstimatingInfo18Screen extends React.Component {
 
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
          centerComponent={{ text: 'Outputs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Info_19")
          }}
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(19/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          Basis of Estimates
        </Text>
        <Text style={styles.textInfo}>
          The supported detail for the activities:
        </Text>
        <Text style={styles.textInfo}>
          A description of how the estimate was developed, the
          assumptions made about the estimates and which constraints
          were used.
        </Text>
                   
                   
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://i.ytimg.com/vi/EYRk3ADU_Y4/maxresdefault.jpg'}}
          />
        </View>
        
      </View>
    );
  }
}
class PCM_EstimatingInfo19Screen extends React.Component {
 
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
          centerComponent={{ text: 'Outputs', style: { color: '#fff' } }}
          rightComponent={{ 
          icon: 'arrow-forward', 
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Activity_1")
          }}
        
        />
         <View style={styles.containerProgress}>
          <ProgressBarAnimated
              width= {Dimensions.get('screen').width - 30}
              value= {(20/23)*100}
              backgroundColor="#341f97"
          />
        </View>
        <Text style={styles.textTitle}>
          Project Document Updates
        </Text>
        <Text style={styles.textInfo}>
          Project documents that may be updated include cost estimates.
        </Text>
        <Text style={styles.textInfo}>
          The risk register may also require an update
          after cost estimates are complete.
        </Text>          
       
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'data:image/png;base64,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'}}
          />
        </View>
        
      </View>
    );
  }
}
class PCM_EstimatingActivity1Screen extends React.Component {

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
              value= {(21/23)*100}
              backgroundColor="#341f97"
          />
        </View>

      <Text style={styles.textTitle} >
          ________,_________ and _________ are inputs of the Estimate Cost process?
      </Text>
      <Card>
        <Button
            title='Scope baseline, Risk register, Activity costs estimates' 
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
            title='Human resource plan, Risk register, Basis of estimates' 
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
            title='Scope baseline, Project Schedule,Basis of estimates' 
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
            title='Scope baseline,  Project Schedule, Human resource plan' 
            onPress = {
              (function(){
                this.setState({ isPressed4:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed2: false })
                this.setState({ isPressed3: false })
                this.setState({ isCorrect:true})
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
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:10,backgroundColor:'#10ac84'}}
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
class PCM_EstimatingActivity2Screen extends React.Component {

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
              value= {(22/23)*100}
              backgroundColor="#341f97"
          />
        </View>

      <Text style={styles.textTitle} >
          Which one of the following is not an input used
          in the process of Estimate Costs?
      </Text>
      <Card>
        <Button
            title='Scope baseline' 
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
            title='Human Resource Management Plan' 
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
            title='Cost Management Plan' 
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
            title='Project Funding Requirements' 
            onPress = {
              (function(){
                this.setState({ isPressed4:true})
                this.setState({ isPressed1: false })
                this.setState({ isPressed2: false })
                this.setState({ isPressed3: false })
                this.setState({ isCorrect:true})
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
class PCM_EstimatingFinalScreen extends React.Component {
  
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
  containerProgress:{
    marginTop:5,
    alignItems: 'center',
  },
    textInfo:{
      textAlign:'center',
      fontSize:20,
      margin:10,
      marginTop:20,
      color:"white",
      backgroundColor:"#54a0ff"   
    },
    textTitle:{
      textAlign:'center',
      fontSize:25,
      marginTop:10,
      marginBottom: 5
    },
    containerImages:{
      justifyContent:'space-around',
      flexDirection:'row',
      alignItems: 'center',
  },
    infoImage:{
        width: 150, 
        height: 100
    },
    textSubTitle:{
      textAlign:'center',
      fontSize:15,
      marginTop:0,
      marginBottom: 5
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
    infoImageOverlay:{
      width: 300, 
      height: 300,
  },
});
export default createSwitchNavigator(
  {
    Info_0:       PCM_EstimatingInfo0Screen,
    Info_1:       PCM_EstimatingInfo1Screen,
    Info_2:       PCM_EstimatingInfo2Screen,
    Info_3:       PCM_EstimatingInfo3Screen,
    Info_4:       PCM_EstimatingInfo4Screen,
    Info_5:       PCM_EstimatingInfo5Screen,
    Info_6:       PCM_EstimatingInfo6Screen,
    Info_7:       PCM_EstimatingInfo7Screen,
    Info_8:       PCM_EstimatingInfo8Screen,
    Info_9:       PCM_EstimatingInfo9Screen,
    Info_10:      PCM_EstimatingInfo10Screen,
    Info_11:      PCM_EstimatingInfo11Screen,
    Info_12:      PCM_EstimatingInfo12Screen,
    Info_13:      PCM_EstimatingInfo13Screen,
    Info_14:      PCM_EstimatingInfo14Screen,
    Info_15:      PCM_EstimatingInfo15Screen,
    Info_16:      PCM_EstimatingInfo16Screen,
    Info_17:      PCM_EstimatingInfo17Screen,
    Info_18:      PCM_EstimatingInfo18Screen,
    Info_19:      PCM_EstimatingInfo19Screen,
    Activity_1:   PCM_EstimatingActivity1Screen,
    Activity_2:   PCM_EstimatingActivity2Screen,
    Reward_Final: PCM_EstimatingFinalScreen

  },
  {
    initialRouteName: 'Info_0',
    headerMode: 'none'
  }
);