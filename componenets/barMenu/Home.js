import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
// import { createDrawerNavigator  } from 'react-navigation';
import Settings from './Settings';
import Catigories from './Catigories';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {
  state = {
    MyCatigoriesArray: [],
    MyCatigories: {
      Positive: true,
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
    this.retrieveData();

  }
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('MyCatigories');
      if (value !== null) {
        console.log(JSON.parse(value));
        this.setState({ MyCatigories: JSON.parse(value) })
        let MyCatigories = JSON.parse(value)
        let newCat = [];
        for (const key in MyCatigories) {
          if (MyCatigories[key] === true) {
            newCat.push(key)
          }
        }
        console.log('newCat is ', newCat)
        this.setState({ MyCatigoriesArray: newCat })

      } else {
        console.log('no data');
        this.storeData()
      }
    } catch (error) {
      alert(error)
    }
  };

  storeData = async () => {
    try {
      console.log('try')
      await AsyncStorage.setItem('MyCatigories', JSON.stringify(this.state.MyCatigories));
      console.log('saved')
    } catch (error) {
    }
  };

  render() {
    return (
      <View>

        <View style={styles.button}>
          <Button style={styles.button}
            title="Settings"
            onPress={() => {
              this.props.navigation.navigate('Settings');
            }}
          />
        </View>

        <View style={styles.button}>
          <Button style={styles.button}
            title="Catigories"
            onPress={() => {
              this.props.navigation.navigate('Catigories');
            }}
          />
        </View>

        <View style={styles.button}>
          <Button style={styles.button}
            title="My Catigories"
            onPress={() => {
              this.props.navigation.navigate('MyCatigories');
            }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Home"
            onPress={() => {
              this.props.navigation.navigate('list', { catigories: this.state.MyCatigoriesArray });
            }}
          />
        </View>

      </View >
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold'
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    marginVertical: 10
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20, marginHorizontal: 20,

    alignItems: 'center'
  },
  list: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
    borderColor: "red",
    borderWidth: 1,
    alignItems: 'center',
    // maxWidth: "90%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 8,
    borderRadius: 10
  },
  screenWidth: {
    // height: "90%"
  }
})


