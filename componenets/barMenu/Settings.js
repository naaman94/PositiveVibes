import React, {Component} from 'react';
import {View, Button} from 'react-native';
import MyCatigories from './MyCatigories';
import Notifications from './Notifications';

const Settings = props => {
  console.log('HOMEPROPS', props);
  return (
    <View>
      <Button
        title="My Catigories"
        onPress={() => {
          props.navigation.navigate({routeName: 'MyCatigories'});
        }}
      />
      <Button
        title="Notifications"
        onPress={() => {
          props.navigation.navigate({routeName: 'Notifications'});
        }}
      />
    </View>
  );
};
export default Settings;
