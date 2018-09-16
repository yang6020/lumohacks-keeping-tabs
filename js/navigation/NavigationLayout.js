
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import AccountForm from '../screens/AccountForm';
import Calendar from '../screens/Calendar'
import CostBenefit from '../screens/CostBenefit'
import Settings from '../screens/Settings'
import Resources from '../screens/Resources'
import Communities from '../screens/Communities'
import DrinkModal from '../components/DrinkModal'



export const authStack = createStackNavigator(
  {
    AccountForm: {
      screen: AccountForm,
    },
  },
  {
    headerMode: 'none',
  }

);
const calendarStack = createStackNavigator({
  Calendar: {
    screen: Calendar,
  },

},

);
const costBenefitStack = createStackNavigator({
  CostBenefit: {
    screen: CostBenefit,
  },
});
const settingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
  },
});
const resourcesStack = createStackNavigator({
  Resources: {
    screen: Resources,
  },
});
const communitiesStack = createStackNavigator({
  Communities: {
    screen: Communities,
  },
});

export default createBottomTabNavigator(
  {
    Calendar: calendarStack,
    CostBenefit: costBenefitStack,
    Resources: resourcesStack,
    Communities: communitiesStack,
    Settings: settingsStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Calendar") {
          iconName = `ios-calendar`;
        } else if (routeName === "CostBenefit") {
          iconName = `ios-stats`;
        } else if (routeName === "Resources") {
          iconName = `ios-book`;
        } else if (routeName === "Settings") {
          iconName = `ios-cog`;
        } else if (routeName === "Communities") {
          iconName = `logo-reddit`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#05AEF6",
      inactiveTintColor: "#999999",
      style: {
        backgroundColor: 'white',
        borderTopColor: '#999999',
        borderTopWidth: .4,
      },
    },
  }
);

