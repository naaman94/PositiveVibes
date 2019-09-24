import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Settings from './Settings';
import Catigories from './Catigories';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Settings: {screen: Settings},
  Catigories: {screen: Catigories},
});

export default createAppContainer(MainNavigator);
