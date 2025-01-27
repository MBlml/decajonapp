/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//import App from './src/App';

// Controlador provisional
import App from './src/screens/preview';


AppRegistry.registerComponent(appName, () => App);
