import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar 
} from 'react-native';

import { Constants } from 'expo';

import Routes from './src/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }, 
  statusBar: {
    backgroundColor: "#1c313a",
    height: Constants.statusBarHeight,
  },
});