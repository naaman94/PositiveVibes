import React, {Component} from 'react';
import {View, Button} from 'react-native';
import Settings from './Settings';
import Catigories from './Catigories';

const Home = props => {
  console.log('HOMEPROPS', props);
  return (
    <View>
      <Button
        title="Settings"
        onPress={() => {
          props.navigation.navigate({routeName: 'Settings'});
        }}
      />
      <Button
        title="Catigories"
        onPress={() => {
          props.navigation.navigate({routeName: 'Catigories'});
        }}
      />
    </View>
  );
};
export default Home;
