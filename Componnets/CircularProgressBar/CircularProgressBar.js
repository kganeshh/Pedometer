import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class CircularProgressBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Progress</Text>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    }
})