import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { MenuComponent } from './components';
import { Provider } from 'react-redux'
import { store } from './state/store';
import { LoginContainer, SignUpContainer, CameraContainer, CarServicesContainer, HistoryContainer, GuideContainer } from './containers';
import NavigationService from './navigation/NavigationService';

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginContainer
    },
    SignUp: {
      navigationOptions: {
        headerTitle: 'Back'
      },
      screen: SignUpContainer
    },
    Menu: {
      navigationOptions: {
        headerLeft: null,
      },
      screen: MenuComponent
    },
    Camera: {
      navigationOptions: {
        headerTitle: 'Back'
      },
      screen: CameraContainer
    },
    CarServices: {
      navigationOptions: {
        headerTitle: 'Back'
      },
      screen: CarServicesContainer
    },
    History: {
      navigationOptions: {
        headerTitle: 'Back'
      },
      screen: HistoryContainer
    },
    Guide: {
      navigationOptions: {
        headerTitle: 'Back'
      },
      screen: GuideContainer
    }
  },
  {
    initialRouteName: 'Login'
  }
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
