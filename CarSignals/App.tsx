import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { MenuComponent } from './components';
import { Provider } from 'react-redux'
import { store } from './state/store';
import { LoginContainer, SignUpContainer, CameraContainer, CarServicesContainer, HistoryContainer, GuideContainer } from './containers';
import NavigationService from './navigation/NavigationService';

const StackNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginContainer
    },
    SignUp: {
      screen: SignUpContainer
    },
    Menu: {
      screen: MenuComponent
    },
    Camera: {
      screen: CameraContainer
    },
    CarServices: {
      screen: CarServicesContainer
    },
    History: {
      screen: HistoryContainer
    },
    Guide: {
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
