import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from '../pages/profile';

const ProfileScreenStacks = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: 'Profile',
      headerTitleAlign: 'center',
      headerBackground: (
        <LinearGradient
          colors={['#8e2de2', '#4a00e0']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      ),
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
    }),
  },
});

export default ProfileScreenStacks;
