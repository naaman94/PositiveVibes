import React, {Component} from 'react';
import {Text, View, CheckBox, Button} from 'react-native';

export default class MyCatigories extends Component {
  render() {
    return (
      <View>
        <Text> MyCatigories </Text>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <CheckBox />
            <Text style={{marginTop: 5}}> MyCatigories 1</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <CheckBox />
            <Text style={{marginTop: 5}}> MyCatigories 2</Text>
          </View>
        </View>
        <Button title="Done" />
      </View>
    );
  }
}
