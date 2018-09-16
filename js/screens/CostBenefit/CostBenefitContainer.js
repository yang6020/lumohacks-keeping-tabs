import React, { Component } from 'react';
import CostBenefit from './CostBenefit';

export default class CostBenefitContainer extends Component {
  static navigationOptions = {
    title: 'Cost Benefit Analysis',
  };
  render() {
    return <CostBenefit />;
  }
}