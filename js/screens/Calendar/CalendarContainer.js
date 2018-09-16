import React, {Component} from 'react';
import Calendar from './CalendarView';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Text} from 'react-native';

export default class CalendarContainer extends Component {
    static navigationOptions = {
        title: 'Calendar',
    };

    formatDates = (data) => {
        const dayMap = {};
        data.allDays.map(day => {

            if (day.sober) {
                dayMap[day.date] = {color:'green'};
            } else {
                dayMap[day.date] = {color:'yellow'};
            }
        });
        return dayMap;
    };

    handleDayPress = (day) => {
        console.log("selected day", day);
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
                    if (loading) return <Text> Loading</Text>;
                    if (error) return <Text>Error: </Text>;
                    return <Calendar days={this.formatDates(data)} onDayPress={this.handleDayPress}/>;
                }}
            </Query>
        )

    }
}
