import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen18984Navigator from '../features/BlankScreen18984/navigator';
import UserProfile38982Navigator from '../features/UserProfile38982/navigator';
import BlankScreen48981Navigator from '../features/BlankScreen48981/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen18984: { screen: BlankScreen18984Navigator },
UserProfile38982: { screen: UserProfile38982Navigator },
BlankScreen48981: { screen: BlankScreen48981Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
