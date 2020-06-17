import { createStackNavigator } from 'react-navigation-stack';
import { hide } from 'expo/build/launch/SplashScreen';
import LoginScreen from '../pages/login';
import TermsAndConditionsScreen from '../pages/terms';

const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: hide,
    }),
  },
  Terms: {
    screen: TermsAndConditionsScreen,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
    }),
  },
});

export default LoginStack;
