import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import CatSlice from './CatSlice';
export default class Catigories extends Component {
  state = {
    categories: ["All Catigories", "Positive", "Motivate", "Future", "Work", "Technology", "Learning", "Family", "Food", "Funny", "Power"]
  }

  render() {
    const { categories } = this.state
    return (
      <View>
        {/* <Text> categories </Text> */}
        <FlatList data={categories} renderItem={item => <CatSlice navigation={this.props.navigation} item={item.item}
        />}
          keyExtractor={(item, index) => index.toString()} />
        {/* <Text> data: {JSON.stringify(navigation.getParam('data'))}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  list: {

    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
    borderColor: "red",
    borderWidth: 1,
    alignItems: 'center',
    // maxWidth: "90%",
    shadowColor: "black",
    // shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 10
  },
  screenWidth: {
    // height: "90%"
  }
})
