import React, { Component } from 'react';
import Settings from './Settings';

export default class SettingsContainer extends Component {
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    return <Settings />;
  }
}