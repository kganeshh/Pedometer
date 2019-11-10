import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Pedometer } from "expo-sensors";
import CircularProgressBar from "./Componnets/CircularProgressBar/CircularProgressBar";
const TEN_THOUSAND = 10000, ZERO = 0;
export default class App extends PureComponent {
  state = {
    currentStepCount: 0
  }
  componentDidMount() {
    this._subscribe();
  }
  _subscribe = () => {
    const { currentStepCount } = this.state;
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState((state) => {
        const { currentStepCount } = state;
        // calculating steps or resetting when reaching 5001 
        let steps = currentStepCount === ZERO ? result.steps :
          currentStepCount === TEN_THOUSAND ?
            ZERO :
            currentStepCount + 1;
        return {
          currentStepCount: steps
        }
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <CircularProgressBar steps={this.state.currentStepCount} />
        <Text style={styles.instructions}>total steps: {this.state.currentStepCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "linear-gradient(to right, rgb(255, 81, 47), rgb(221, 36, 118))",
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
    fontSize: 30,
    marginTop: 10
  },
});
