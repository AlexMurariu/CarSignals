import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { LoginContainer, SignUpContainer, CameraContainer, CarServicesContainer, HistoryContainer, HeaderContainer } from './containers';
import NavigationService from './navigation/NavigationService';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { mainColor } from './constants';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: mainColor,
    accent: '#f1c40f',
  },
};

const DrawerNavigator = createDrawerNavigator({
    Camera: {screen: CameraContainer},
    History: {screen: HistoryContainer},
    CarServices: {screen: CarServicesContainer},
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
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <PaperProvider theme={theme}>
        <HeaderContainer />
          <AppContainer ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </PaperProvider>
    </Provider>;
  }
}
