import React, {Component} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import DrinkModal from './DrinkModal'
import {Mutation} from 'react-apollo'

class DrinkModalContainer extends Component{
  render(){
    const { navigation } = this.props;
    const dayDate = navigation.getParam("dayDate");
    const dayId = navigation.getParam("dayId");
    console.log(dayDate)
    // console.log(dayId)

    handleYesClick = () => {
      <Mutation ></Mutation>
    }

    return (
      <View>
       <DrinkModal/>
      </View>
    )
  }
  
}

export default DrinkModalContainer




