import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';
import TripCalendar from '~/pages/TripCalendar';
import Help from '~/pages/Help';
import VanList from '~/pages/VanList';

const Routes = createAppContainer(
  createSwitchNavigator({ 
    Login,
    Register,
    Main,
    Profile,
    TripCalendar,
    Help,
    VanList
  })
);

export default Routes;
