import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import Slice from './Slice';
import axios from 'axios';

export class list extends Component {
    state = {
        tips: []
    }
    componentDidMount() {
        axios.post('https://server-positive-vibes.herokuapp.com/search', this.props.navigation.getParam('catigories'))
            .then(res => {
                this.setState({ tips: res.data })
                this.render()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <View style={styles.screenWidth}>
                <FlatList data={this.state.tips}
                    renderItem={item =>
                        (<Slice item={item.item}
                        />)
                    }
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        )
    }
}

export default list
const styles = StyleSheet.create({
    screenWidth: { height: "100%" }
})