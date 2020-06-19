import { createStackNavigator} from 'react-navigation';
import ModuleScreen from './Activities';
import Module1Screen from './Module1'
import Module2Screen from './Module2'
import Module3Screen from './Module3'
import Module4Screen from './Module4'

export default createStackNavigator({
  ListModules: {
    screen: ModuleScreen,
    navigationOptions : {
      title:"Modules",
    }
  },
  Module_1: {
    screen: Module1Screen,
    navigationOptions : {
      title:"Module 1",
    }
  },
  Module_2: {
    screen: Module2Screen,
    navigationOptions : {
      title:"Module 2",
    }
  },
  Module_3: {
    screen: Module3Screen,
    navigationOptions : {
      title:"Module 3",
    }
  },
  Module_4: {
    screen: Module4Screen,
    navigationOptions : {
      title:"Module 4",
    }
  },
},
{
  initialRouteName: 'ListModules',
});