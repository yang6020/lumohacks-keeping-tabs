import React, {Component} from 'react';
import Calendar from './CalendarView';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Text, View} from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator'

export default class CalendarContainer extends Component {
    static navigationOptions = {
        title: 'Calendar',
    };

    formatDates = (data) => {
        const dayMap = {};
        data.allDays.sort((item1, item2) => {
            if (item1.date < item2.date)
                return -1;
            if (item1.date > item2.date)
                return 1;
            return 0;
        });

        this.addDayOfYear(data.allDays);

        const soberDays = data.allDays.filter(day => {
            return day.sober;
        });


        const drunkDays = data.allDays.filter(day => {
            return !day.sober;
        });

        this.findConsecutiveDays(soberDays);
        this.findConsecutiveDays(drunkDays);


        data.allDays.map(day => {
            if (day.sober) {
                dayMap[day.date] = {color: 'green', startingDay: day.startingDay, endingDay: day.endingDay};
            } else {
                dayMap[day.date] = {color: 'yellow', startingDay: day.startingDay, endingDay: day.endingDay};
            }
        });
        return dayMap;
    };

    handleDayPress = day => {
        this.props.navigation.navigate('MyModal', {
            dayDate: day.dateString,
            dayId: day.id,
        });
    };

    findConsecutiveDays = (arr) => {
        let start = arr[0];
        let stop = start;
        let arrLength = arr.length;

        for (let i = 1; i < arrLength; i++) {

            if (arr[i].dayOfYear === stop.dayOfYear + 1) {
                stop = arr[i];
            } else {

                if (start.dayOfYear === stop.dayOfYear) {
                    start.startingDay = true;
                    start.endingDay = true;
                } else {
                    start.startingDay = true;
                    stop.endingDay = true;
                }
                // reset the start and stop pointers
                start = arr[i];
                stop = start;
            }
        }

        if (start.dayOfYear === stop.dayOfYear) {
            start.startingDay = true;
            start.endingDay = true;
        } else {
            start.startingDay = true;
            stop.endingDay = true;
        }

        return arr;

    };

    getDayOfYear = (currentDate) => {
        const start = new Date(currentDate.getFullYear(), 0, 0);
        const diff = (currentDate - start) + ((start.getTimezoneOffset() - currentDate.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(diff / oneDay);
        return day
    };

    addDayOfYear = (days) => {
        days.forEach(day => {
            const dateString = day.date;
            const res = dateString.split("-");
            const monthStr = res[1];
            const month = parseInt(monthStr);
            const date = new Date(res[0], month - 1, res[2]);
            const dayOfYear = this.getDayOfYear(date);
            day.dayOfYear = dayOfYear;
        });
    };

    render() {
        return (
            <Query
                query={gql`
                    {
                        allDays {
                            id
                            sober
                            date
                        }
                    }
                `}
            >
                {({ loading, error, data }) => {
                    console.log(data)
                    data= data
                    if (loading) return <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}><LoadingIndicator /></View>
                    if (error) return <Text>Error: </Text>;
                    return <Calendar days={this.formatDates(data)} onDayPress={this.handleDayPress}/>;
                }}
            </Query>
        )

    }
}
