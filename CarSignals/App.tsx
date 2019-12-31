import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { LoginScreen, SignUpScreen, DefaultScreen } from './screens';
import { Provider } from 'react-redux'
import { store } from './state/store';
import LoginContainer from './screens/LoginContainer';

const StackNavigator = createStackNavigator(
  {
    SignUp: {
      screen: SignUpScreen
    },
    Login: {
      screen: LoginContainer
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
    return <Provider store={store}>
      <AppContainer />
    </Provider>;
  }
}
