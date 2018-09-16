/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import RootStackNavigator from "./navigation/RootStackNavigation";


export default class App extends Component {
  render() {
    return (
      <RootStackNavigator />
    );
  }
}