import React from 'react';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreenStack from './HomeStack';
import ProfileScreenStack from './ProfileStack';

const NavigationStacks = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenStack,
      navigationOptions: () => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon type="antdesign" name="camerao" size={25} color={tintColor} />
        ),
      }),
    },
    Profile: {
      screen: ProfileScreenStack,
      navigationOptions: () => ({
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Icon type="antdesign" name="user" size={25} color={tintColor} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Home',
    order: ['Home', 'Profile'],
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveTintColor: '#6c7075',
      activeTintColor: '#4a00e0',
      keyboardHidesTabBar: false,
    },
    lazy: 'true',
  }
);

export default createAppContainer(NavigationStacks);
