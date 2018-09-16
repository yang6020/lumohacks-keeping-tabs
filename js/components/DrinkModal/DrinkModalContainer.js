import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import DrinkModal from './DrinkModal'
import { Mutation } from 'react-apollo'

class DrinkModalContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const dayDate = this.props.navigation.getParam("dayDate");
    const dayId = this.props.navigation.getParam("dayId");
    console.log(dayDate)
    // console.log(dayId)

    handleYesClick = () => {
      <Mutation ></Mutation>
    }

    return (
      <DrinkModal navigation={this.props.navigation} />
    )
  }

}

export default DrinkModalContainer




