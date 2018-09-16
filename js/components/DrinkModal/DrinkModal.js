import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './styles'
import Icon from "react-native-vector-icons/Ionicons";
const DrinkModal = ({ dayId, navigation }) => {

  const UPDATE_DAY = gql`
    mutation updateDay($id: ID!, $sober: Boolean) {
      updateDay(id: $id, sober: $sober) {
        id
        sober
      }
    }
  `;

  const handleClick = render => (
    console.log('MY ID', dayId),
    (
      <Mutation mutation={UPDATE_DAY}>
        {(updateDay, { data, error, loading }) =>
          render({ updateDay, data, error, loading })
        }
      </Mutation>
    )
  );

  return (
    <View>
                <View style={styles.header}>
                <Icon
                    style={{ marginLeft: 10 }}
                    name="md-close"
                    onPress={() => navigation.navigate("Calendar")}
                    color="#e6e6e6"
                    size={23}
                />
            </View>

      <View>
        <Text>Did you Drink today?</Text>
        <Mutation mutation={UPDATE_DAY}>
          {(updateDay, { data }) => (
            <TouchableOpacity
              onPress={() =>
                updateDay({ variables: { id: dayId, sober: false } }).then(() =>
                  navigation.navigate('Calendar'),
                )
              }
            >
              <Text>Yes</Text>
            </TouchableOpacity>
          )}
        </Mutation>
        <Mutation mutation={UPDATE_DAY}>
          {(updateDay, { data }) => (
            <TouchableOpacity
              onPress={() =>
                updateDay({ variables: { id: dayId, sober: true } }).then(() =>
                  navigation.navigate('Calendar'),
                )
              }
            >
              <Text>No</Text>
            </TouchableOpacity>
          )}
        </Mutation>
      </View>
    </View>
  );
};

export default DrinkModal;
