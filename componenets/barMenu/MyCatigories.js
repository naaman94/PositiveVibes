import React, { Component } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';

export default class MyCatigories extends Component {
  state = {
    MyCatigories: {
      Positive: false,
      Motivate: false,
      Future: false,
      Work: false,
      Technology: false,
      Learning: false,
      Family: false,
      Food: false,
      Funny: false,
      Power: false
    }
  }

  componentDidMount() {
    this.retrieveData()
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('MyCatigories');
      if (value !== null) {
        console.log(JSON.parse(value));
        this.setState({ MyCatigories: JSON.parse(value) })
      } else {
        console.log('no data');
      }
    } catch (error) {
      alert(error)
    }
  };

  changeCat = async () => {
    try {
      await AsyncStorage.setItem('MyCatigories', JSON.stringify(this.state.MyCatigories));
      console.log('saved')
      this.props.navigation.navigate('Home');
    } catch (error) {
    }
  };

  render() {
    return (
      <View>
        <FlatList data={Object.keys(this.state.MyCatigories)}
          renderItem={item => {
            return (
              <View >
                <CheckBox
                  title={item.item}
                  value={this.state.MyCatigories[item.item]}
                  onValueChange={() => this.setState(pervState => ({ MyCatigories: { ...this.state.MyCatigories, [item.item]: !this.state.MyCatigories[item.item] } }))}

                />
                <Text>{item.item}</Text>
              </View>
            )
          }
          }
          keyExtractor={(item, index) => index.toString()} />
        <Button title="Save" onPress={this.changeCat} />
      </View>
    );
  }
}
