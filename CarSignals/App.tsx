import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { store } from './state/store';
import { LoginContainer, SignUpContainer, CameraContainer, CarServicesContainer, HistoryContainer, GuideContainer, HeaderContainer } from './containers';
import NavigationService from './navigation/NavigationService';
import { createDrawerNavigator } from 'react-navigation-drawer';


const DrawerNavigator = createDrawerNavigator({
    History: {screen: HistoryContainer},
    Camera: {screen: CameraContainer},
    CarServices: {screen: CarServicesContainer},
    Guide: {screen: GuideContainer}
  })

const SwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginContainer
  },
  SignUp: {
    screen: SignUpContainer
  },
  Main: {
    screen: DrawerNavigator
  },
},
  {
    initialRouteName: 'Login'
  }
)  

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <HeaderContainer />
      <AppContainer ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    </Provider>;
  }
}
