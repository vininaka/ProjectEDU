import { createStackNavigator} from 'react-navigation';
import ActivitiesScreen from './Activities';
import Module1Screen from './Modules/Module1'
import Module2Screen from './Modules/Module2'
import Module3Screen from './Modules/Module3'
import Module4Screen from './Modules/Module4'
import MaintenanceScreen from './Maintenance'

export default createStackNavigator({
  Activities: {
    screen: ActivitiesScreen,
    navigationOptions : {
      title:"Activities",
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
  Maintenance: {
    screen: MaintenanceScreen,
    navigationOptions : {
      title:"Maintenance",
    }
  },

},
{
  initialRouteName: 'Activities',
  headerMode: 'none'
});