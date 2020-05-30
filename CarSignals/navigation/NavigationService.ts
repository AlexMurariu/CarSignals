import { DrawerActions } from 'react-navigation-drawer';
import { NavigationActions } from 'react-navigation';

let _navigator;
let _currentRoute;

function setTopLevelNavigator(navigatorRef: any) {
    _navigator = navigatorRef;
}

function navigate(routeName: string, params?: any) {
    _currentRoute = routeName;
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function openDrawer() {
    _navigator.dispatch(DrawerActions.openDrawer());
}

function closeDrawer() {
    _navigator.dispatch(DrawerActions.closeDrawer());
}

function getCurrentRoute() {
    return _currentRoute;
}

export default {
    navigate,
    setTopLevelNavigator,
    openDrawer,
    closeDrawer,
    getCurrentRoute
}