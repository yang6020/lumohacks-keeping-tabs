import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import DrinkModal from './DrinkModal';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

class DrinkModalContainer extends Component {
  render() {
    const { navigation } = this.props;
    const dayDate = navigation.getParam('dayDate');
    console.log(dayDate);

    return (
      <View>
        <Query
          variables={{ date: dayDate }}
          query={gql`
            query dayByDate($date: String!) {
              Day(date: $date) {
                id
                date
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            {
              /* console.log('bob',data) */
            }

            if (loading) return <Text>Loading: </Text>;
            if (error) return <Text>Error: </Text>;

            dayId = data.Day.id;
            console.log(dayId);

            return <DrinkModal dayId={dayId} navigation={this.props.navigation}/>;
          }}
        </Query>
      </View>
    );
  }
}

export default DrinkModalContainer;

{
  /* <DrinkModal/> */
}
