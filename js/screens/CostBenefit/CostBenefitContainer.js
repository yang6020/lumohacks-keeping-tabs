import React, { Component } from 'react';
import CostBenefit from './CostBenefit';

export const pros = [
  {
    id: 0,
    title: 'Saves money',
    weight: 3,
  },
  {
    id: 1,
    title: 'Better health',
    weight: 5,
  },
  {
    id: 2,
    title: 'Spend more time with the kids',
    weight: 5,
  },
];

export const cons = [
  {
    id: 0,
    title: 'Feeling lonely',
    weight: 5,
  },
  {
    id: 1,
    title: 'Cant pass the time',
    weight: 5,
  },
];
export default class CostBenefitContainer extends Component {
  static navigationOptions = {
    title: 'Cost Benefit Analysis',
  };

  getSum(total, num) {
    return total + num;
  }
  render() {
    const allProWeights = [];
    pros.map(pro => allProWeights.push(pro.weight));

    const allConWeights = [];
    cons.map(con => allConWeights.push(con.weight));

    const allWeights = [...allProWeights, ...allConWeights].reduce(this.getSum);

    const totalPros = allProWeights.reduce(this.getSum) / allWeights;
    const totalCons = allConWeights.reduce(this.getSum) / allWeights;

    return (
      <CostBenefit pros={pros} cons={cons} pw={totalPros} cw={totalCons} />
    );
  }
}
