import React, { Component } from 'react';
import Calendar from './Calendar';

export default class CalendarContainer extends Component {
  static navigationOptions = {
    title: 'Calendar',
  };
  render() {
    return <Calendar />;
  }
}