import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen016668Navigator from '../features/CopyOfBlankScreen016668/navigator';
import CopyOfBlankScreen116667Navigator from '../features/CopyOfBlankScreen116667/navigator';
import BlankScreen216666Navigator from '../features/BlankScreen216666/navigator';
import BlankScreen016665Navigator from '../features/BlankScreen016665/navigator';
import BlankScreen116664Navigator from '../features/BlankScreen116664/navigator';
import CopyOfBlankScreen016663Navigator from '../features/CopyOfBlankScreen016663/navigator';
import CopyOfBlankScreen116662Navigator from '../features/CopyOfBlankScreen116662/navigator';
import BlankScreen216661Navigator from '../features/BlankScreen216661/navigator';
import CopyOfBlankScreen016655Navigator from '../features/CopyOfBlankScreen016655/navigator';
import CopyOfBlankScreen116654Navigator from '../features/CopyOfBlankScreen116654/navigator';
import BlankScreen216653Navigator from '../features/BlankScreen216653/navigator';
import BlankScreen116645Navigator from '../features/BlankScreen116645/navigator';
import BlankScreen116644Navigator from '../features/BlankScreen116644/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen016668: { screen: CopyOfBlankScreen016668Navigator },
CopyOfBlankScreen116667: { screen: CopyOfBlankScreen116667Navigator },
BlankScreen216666: { screen: BlankScreen216666Navigator },
BlankScreen016665: { screen: BlankScreen016665Navigator },
BlankScreen116664: { screen: BlankScreen116664Navigator },
CopyOfBlankScreen016663: { screen: CopyOfBlankScreen016663Navigator },
CopyOfBlankScreen116662: { screen: CopyOfBlankScreen116662Navigator },
BlankScreen216661: { screen: BlankScreen216661Navigator },
CopyOfBlankScreen016655: { screen: CopyOfBlankScreen016655Navigator },
CopyOfBlankScreen116654: { screen: CopyOfBlankScreen116654Navigator },
BlankScreen216653: { screen: BlankScreen216653Navigator },
BlankScreen116645: { screen: BlankScreen116645Navigator },
BlankScreen116644: { screen: BlankScreen116644Navigator },

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
