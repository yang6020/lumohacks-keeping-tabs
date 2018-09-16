import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DrinkModal from './DrinkModal';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingIndicator from '../../components/LoadingIndicator';

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

            if (loading) return <LoadingIndicator />
            if (error) return <Text>Error: </Text>;

            dayId = data.Day.id;
            console.log(dayId);

            return <DrinkModal dayId={dayId} navigation={this.props.navigation} />;
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
