import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen116654Navigator from '../features/CopyOfBlankScreen116654/navigator';
import BlankScreen216653Navigator from '../features/BlankScreen216653/navigator';
import BlankScreen116645Navigator from '../features/BlankScreen116645/navigator';
import BlankScreen116644Navigator from '../features/BlankScreen116644/navigator';
import BlankScreen016643Navigator from '../features/BlankScreen016643/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen116654: { screen: CopyOfBlankScreen116654Navigator },
BlankScreen216653: { screen: BlankScreen216653Navigator },
BlankScreen116645: { screen: BlankScreen116645Navigator },
BlankScreen116644: { screen: BlankScreen116644Navigator },
BlankScreen016643: { screen: BlankScreen016643Navigator },

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
