import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import Slice from './Slice';

export class list extends Component {
    render() {
        return (
            <View style={styles.screenWidth}>
                <FlatList data={this.props.tips}
                    renderItem={item =>
                        (<Slice item={item.item} />)} />
            </View>
        )
    }
}

export default list
const styles = StyleSheet.create({
    screenWidth: { height: "90%" }
})