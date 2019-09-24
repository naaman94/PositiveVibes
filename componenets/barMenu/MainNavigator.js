import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Settings from './Settings';
import Catigories from './Catigories';
import MyCatigories from './MyCatigories';
import Notifications from './Notifications';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Settings: {screen: Settings},
  Catigories: {screen: Catigories},
  MyCatigories: {screen: MyCatigories},
  Notifications: {screen: Notifications},
});

export default createAppContainer(MainNavigator);
