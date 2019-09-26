import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import list from './list';

export class CatSlice extends Component {

  onPressCatg = () => {
    let searchcat = [];
    if (this.props.item === "All Catigories") {
      searchcat = ["Positive", "Motivate", "Future", "Work", "Technology", "Learning", "Family", "Food", "Funny", "Power"]
    } else {
      searchcat = [this.props.item]
    }
    this.props.navigation.navigate('list', { catigories: searchcat });
  }


  render() {

    return (
      <TouchableOpacity
        onPress={
          this.onPressCatg
          // this.props.navigation.navigate('Settings')
          // this.props.navigation.navigate('list', { catigories: this.props.item });
        }
      >
        <Text style={styles.list}>{this.props.item}</Text>
      </TouchableOpacity>
    );
  }
}

export default CatSlice;

// import {Button} from 'react-native-elements';

// export class CatSlice extends Component {
//   onPressCatg = () => {
//     let searchcat = []
//     if (this.props.item === "All Catigories") {
//       searchcat = ["Positive", "Motivate", "Future", "Work", "Technology", "Learning", "Family", "Food", "Funny", "Power"]
//     } else {
//       searchcat
//     }
//     axios.post('https://server-positive-vibes.herokuapp.com/search', [this.props.item])
//       .then(res => {
//         this.props.navigation.navigate('list', { catigories: res.data });
//         console.log('res.data', res.data)
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }
//   render() {

//     return (
//       <TouchableOpacity
//         onPress={
//           this.onPressCatg
//           // this.props.navigation.navigate('Settings')
//           // this.props.navigation.navigate('list', { catigories: this.props.item });
//         }
//       >
//         <Text style={styles.list}>{this.props.item}</Text>
//       </TouchableOpacity>
//     );
//   }
// }

// export default CatSlice;


const styles = StyleSheet.create({

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
