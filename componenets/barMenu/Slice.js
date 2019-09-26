import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, } from 'react-native'

export class Slice extends Component {

    backgroundColor = (key) => {
        if (key === 0) { return "aqua"; }
        if (key === 1) { return "white"; }
        if (key === 2) { return "blue"; }
        if (key === 3) { return "gray"; }
        if (key === 4) { return "yellow"; }
    }

    render() {

        return (
            <View style={{ ...styles.list, backgroundColor: this.backgroundColor(this.props.item.category) }}>
                {/* <Image
                    style={{ width: 50, height: 50 }}
                    source={require('./image/img1.png')}
                /> */}
                <Text >{this.props.item.tip}</Text>
            </View>
        )
    }
}

export default Slice

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
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
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

