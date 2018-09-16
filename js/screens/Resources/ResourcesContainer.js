import React, { Component } from 'react';
import Resources from './Resources';

export default class ResourcesContainer extends Component {
  static navigationOptions = {
    title: 'Resources',
  };
  render() {
    return <Resources />;
  }
}