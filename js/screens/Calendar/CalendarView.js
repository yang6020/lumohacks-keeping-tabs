import React from 'react';
import { Text, View, } from 'react-native';
import styles from './styles';
import { Calendar, Agenda } from 'react-native-calendars';


const CalendarView = ({ navigation, days, onDayPress }) => {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
        <Calendar
            markedDates={days}
            markingType={'period'}
            onDayPress={onDayPress}
        />
    </View>
  );
};
export default CalendarView;
