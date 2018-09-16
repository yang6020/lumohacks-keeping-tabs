import React from 'react';
import { Text, View, } from 'react-native';
import styles from './styles';
import { Calendar, Agenda } from 'react-native-calendars';

const CalendarView = ({ days, onDayPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.calendar}>
        <Calendar
          markedDates={days}
          markingType={'period'}
          onDayPress={onDayPress}
        />
      </View>
    </View>
  );
};
export default CalendarView;
