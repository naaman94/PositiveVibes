import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import CatSlice from './CatSlice';
export default class Catigories extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> categories </Text>
        <FlatList
          data={navigation.getParam('data')}
          renderItem={item => <CatSlice item={item.item} />}
        />
        {/* ///jozaaa */}
        {/* <Text> data: {JSON.stringify(navigation.getParam('data'))}</Text> */}
      </View>
    );
  }
}
