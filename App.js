import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Pedometer } from "expo-sensors";
import CircularProgressBar from "./Componnets/CircularProgressBar/CircularProgressBar";

export default class App extends Component {
  state = {
    currentStepCount: 0
  }
  componentDidMount() {
    this._subscribe();
  }
  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });
  }
  render() {
    console.log(this.state.currentStepCount);
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{this.state.currentStepCount}</Text>
        <CircularProgressBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 30
  },
});
