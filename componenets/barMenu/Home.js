import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Settings from './Settings';
import Catigories from './Catigories';

export default class Home extends Component {

  render() {
    return (
      <View>
        <Button
          title="Settings"
          onPress={() => {
            this.props.navigation.navigate('Settings');
          }}
        />
        <Button
          title="Catigories"
          onPress={() => {
            this.props.navigation.navigate('Catigories');
          }}
        />
      </View >
    );
  }
}
