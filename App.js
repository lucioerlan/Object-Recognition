import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './src/navigations/LoginStack';
import DashboardScreen from './src/pages/dashboard';
import LoadingScreen from './src/pages/LoadingScreen';

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen,
  LoginScreen,
  DashboardScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);
