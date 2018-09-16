import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {removeUser} from '../../config/models';
import styles from './styles';

const Settings = ({ navigation, text, changeTextHandler, sendEmail, submitSponsor }) => {
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.inputText}
            onChangeText={(txt) => changeTextHandler(txt)}
            value={text}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={submitSponsor}
        >
            <View style={styles.gridItem}>
                <Text style={styles.gridText}>Submit</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={sendEmail}
        >
            <View style={styles.gridItem}>
                <Icon name={'ios-send'} size={25} color={'white'} />
                <Text style={styles.gridText}>Email Report</Text>
            </View>
        </TouchableOpacity>
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
