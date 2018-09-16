import React, { Component } from 'react';
import CostBenefit from './CostBenefit';
import ProConContainer from './../../containers/ProConContainer.js';
import { Text } from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';

export default class CostBenefitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalToOpen: '',
      allWeights: '',
    };
  }

  _showModal = show => {
    this.setState({ showModal: show });
  };

  pickModal = modal => {
    this.setState({ modalToOpen: modal });
  };

  _handleState(allWeights) {
    this.setState({ allWeights });
  }
  static navigationOptions = {
    title: 'Cost Benefit Analysis',
  };

  getSum(total, num) {
    return total + num;
  }
  render() {
    return (
      <ProConContainer>
        {({ addPro, addCon, getPros, getCons, loading, error }) => {
          if (getPros.loading || getCons.loading) return <LoadingIndicator />
          if (error) return <Text>Error</Text>;
          pros = getPros.data.allPros;
          cons = getCons.data.allCons;
          const allProWeights = [];

          pros.map(pro => allProWeights.push(pro.weight));

          const allConWeights = [];
          cons.map(con => allConWeights.push(con.weight));

          const allWeights = [...allProWeights, ...allConWeights].reduce(
            this.getSum,
          );

          const totalPros = allProWeights.reduce(this.getSum) / allWeights;
          const totalCons = allConWeights.reduce(this.getSum) / allWeights;

          return (
            <CostBenefit
              pros={pros}
              cons={cons}
              pw={totalPros}
              cw={totalCons}
              toggleModal={show => this._showModal(show)}
              modalShown={this.state.showModal}
              modalToOpen={this.state.modalToOpen}
              pickModal={modal => this.pickModal(modal)}
              addPro={addPros}
              addCon={addCons}
              navigation={this.props.navigation}
            />
          );
        }}
      </ProConContainer>
    );
  }
}
