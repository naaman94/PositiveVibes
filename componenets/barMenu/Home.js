import React, {Component} from 'react';
import {View, Button} from 'react-native';
import Settings from './Settings';
import Catigories from './Catigories';

export default class Home extends Component {
  state = [
    {
      id: 1,
      title: 'Asmaa1',
      obj: 'dkjaskfhdjkfhljkdhfkjdshkjhdscdhkjfdhskj',
    },
    {
      id: 2,
      title: 'Asmaa2',
      obj: 'dkjaskfhdjkfhljkdhfkjdshkjhdscdhkjfdhskj',
    },
    {
      id: 3,
      title: 'My Moath',
      obj: 'dkjaskfhdjkfhljkdhfkjdshkjhdscdhkjfdhskj',
    },
  ];
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
            this.props.navigation.navigate(
              'Catigories',
              // jozaa
              {data: this.state},
            );
          }}
        />
      </View>
    );
  }
}
