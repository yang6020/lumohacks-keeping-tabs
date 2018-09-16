import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from './styles';

export const { height, width } = Dimensions.get('window');
const CostBenefit = ({ navigation, pros, cons, pw, cw }) => {
  console.log(pw, cw);

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View
          style={{ backgroundColor: 'green', width: width * pw, height: height / 15, }}
        />
        <View
          style={{ backgroundColor: 'red', width: width * cw, height: height / 15 }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.prosButton]}>
          <Text>Add Pros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.consButton]}>
          <Text>Add Cons</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.header}>Pros for Not Drinking</Text>
        <ScrollView>
          {pros.map(pro => (
            <Text key={pro.id}>{`\u2022 ${pro.title}`}</Text>
          ))}
        </ScrollView>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.header}>Cons for Not Drinking</Text>
        <ScrollView>
          {cons.map(con => (
            <Text key={con.id}>{`\u2022 ${con.title}`}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default CostBenefit;
