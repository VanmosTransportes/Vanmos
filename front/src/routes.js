import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';
import TripCalendar from '~/pages/TripCalendar';
import Help from '~/pages/Help';
import VanList from '~/pages/VanList';
import CreateDriver from '~/pages/CreateDriver';
import CreateVeicule from '~/pages/CreateVeicule';
import ListVeicule from '~/pages/ListVeicule';
import ListDriver from '~/pages/ListDriver';
import VanInfo from '~/pages/VanInfo';

const Routes = createAppContainer(
  createSwitchNavigator({ 
    Login,
    Register,
    Main,
    Profile,
    TripCalendar,
    Help,
    VanList,
    CreateDriver,
    CreateVeicule,
    ListVeicule,
    ListDriver,
    VanInfo
  })
); 

export default Routes;
