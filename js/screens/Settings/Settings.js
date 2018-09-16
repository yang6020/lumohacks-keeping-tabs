import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { removeUser } from '../../config/models';
import styles from './styles';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          removeUser();
          navigation.navigate('SignedOut');
        }}
      >
        <View style={styles.gridItem}>
          <Icon name={'ios-power'} size={25} color={'white'} />
          <Text style={styles.gridText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Settings;
