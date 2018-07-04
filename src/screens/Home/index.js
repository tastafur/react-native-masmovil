import React from 'react'
import { createDrawerNavigator } from 'react-navigation';

import Home from './stateless'
import SideBar from '../../components/SideBar'

export default createDrawerNavigator(
  {
    Home: Home
  },
  {
    contentComponent: props => <SideBar {...props} />,
    navigationOptions: {
      header: null
    },

  }
);
