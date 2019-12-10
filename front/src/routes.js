import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
// import Register from '~/pages/Register';

const Routes = createAppContainer(
  createSwitchNavigator({ 
    Login,
    Main,
    // Register
  })
);

export default Routes;
