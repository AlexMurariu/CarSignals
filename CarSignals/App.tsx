import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { MenuComponent } from './components';
import { Provider } from 'react-redux'
import { store } from './state/store';
import { LoginContainer, SignUpContainer } from './containers';
import NavigationService from './navigation/NavigationService';

const StackNavigator = createStackNavigator(
  {
    // Login: {
    //   screen: LoginContainer
    // },
    // SignUp: {
    //   screen: SignUpContainer
    // },
    Home: {
      screen: MenuComponent
    },
  },
  // {
  //   initialRouteName: 'Login'
  // }
)

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <AppContainer ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
      />
    </Provider>;
  }
}
