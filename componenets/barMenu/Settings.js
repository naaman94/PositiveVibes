import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import MyCatigories from './MyCatigories';
import Notifications from './Notifications';

export default class Settings extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View>
        <Button
          title="My Catigories"
          onPress={() => {
            navigation.navigate('MyCatigories');
          }}
        />
        <Button
          title="Notifications"
          onPress={() => {
            navigation.navigate('Notifications');
          }}
        />
      </View>
    );
  }
}
