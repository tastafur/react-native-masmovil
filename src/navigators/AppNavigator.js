import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import LogIn from '../screens/LogIn'
import AuthLoading from '../screens/AuthLoading'
import Home from '../screens/Home'

const AuthStack = createStackNavigator({ LogIn: LogIn }, { navigationOptions: {
    header: null
  }});

export const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Home: Home,
    AuthStack: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
