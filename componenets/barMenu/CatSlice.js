import React, {Component} from 'react';
import {Text, View} from 'react-native';
// import list from '../list';
// import {Button} from 'react-native-elements';

export class CatSlice extends Component {
  render() {
    return (
      <View>
        {/* <Button
          onPress={() => {
            this.props.navigation.navigate('list');
          }}
          title={this.props.item.title}
        /> */}
        <Text>{this.props.item.title}</Text>
        <Text> {this.props.item.obj} </Text>
      </View>
    );
  }
}

export default CatSlice;
