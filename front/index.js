import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import Routes from './src/navigations/Routes'

AppRegistry.registerComponent(appName, () => Routes);
