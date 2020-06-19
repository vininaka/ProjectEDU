import { createStackNavigator} from 'react-navigation';
import ListCostManagementScreen from './CostManagementList';
import EstimatingCostTheoryScreen from './EstimatingTheory';
import IntroductionTheoryScreen from './IntroductionTheory';
import IntroductionAcitivitiesScreen from './IntroductionActivities';
import IntroductionVideoScreen from './IntroductionVideo';
import EstimatingActivitiesScreen from './EstimatingActivities';
import DetermineBudgetActivitiesScreen from  "./DetermineBudgetActivities";
import DetermineBudgetTheoryScreen from './DetermineBudgetTheory'
import ControlCostsActivitiesScreen from './ControlCostActivities'
import ControlCostsTheoryScreen from './ControlCostsTheory'

//Stack Navigator for Module 3
//Composed by the following screens:
// List Cost Management
// Introduction Video
// introduction Theory
// Introduction Activities
// Estimating Theory
// Estimating Activities
// Determine Budget Theory
// Determine Budget Activities
// Control Costs Theory
// Control Costs Activities
export default createStackNavigator({
  
  ListCostManagement: {
    screen: ListCostManagementScreen,
    navigationOptions : {
      title:"List Cost Management",
    }
  },
  IntroductionCost: {
    screen: IntroductionTheoryScreen,
    navigationOptions : {
      title:"Introduction Theory",
    }
  },
  IntroductionVideo: {
    screen: IntroductionVideoScreen,
    navigationOptions : {
      title:"Introduction Video",
    }
  },
  IntroductionActivities: {
    screen:IntroductionAcitivitiesScreen,
    navigationOptions : {
      title:"Introduction Activities",
    }
  },
  EstimatingCost: {
    screen: EstimatingCostTheoryScreen,
    navigationOptions : {
      title:"Estimating",
    }
  },
  EstimatingActivities: {
    screen: EstimatingActivitiesScreen,
    navigationOptions : {
      title:"Estimating Activities",
    }
  },
  DetermineBudget: {
    screen: DetermineBudgetTheoryScreen,
    navigationOptions : {
      title:"Determine Budget Theory",
    }
  },
  DetermineBudgetActivities: {
    screen: DetermineBudgetActivitiesScreen,
    navigationOptions : {
      title:"Determine Budget Activities",
    }
  },
  ControlCosts: {
    screen: ControlCostsTheoryScreen,
    navigationOptions : {
      title:"Control Costs Theory",
    }
  },
  ControlCostsActivities: {
    screen: ControlCostsActivitiesScreen,
    navigationOptions : {
      title:"Control Costs Activities",
    }
  },
},
{
  initialRouteName: 'ListCostManagement',
  headerMode: 'none'
});