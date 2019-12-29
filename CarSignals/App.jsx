import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { LoginScreen, SignUpScreen, DefaultScreen } from './screens';

const StackNavigator = createStackNavigator(
  {
    SignUp: {
      screen: SignUpScreen
    },
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: DefaultScreen
    },
  },
  {
    initialRouteName: 'Login'
  }
)

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
