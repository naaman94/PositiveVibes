import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, } from 'react-native'

export class Slice extends Component {
    
    render() {

        return (
            <View style={styles.list}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require('./image/img1.png')}
                />
                <Text >{this.props.item.tip}</Text>
            </View>
        )
    }
}

export default Slice
const styles = StyleSheet.create({
    list: {
        padding: 10,
        marginVertical: 10,
        borderColor: "black",
        borderWidth: 1

    },
    screenWidth: {
        // height: "90%"
    }
})
