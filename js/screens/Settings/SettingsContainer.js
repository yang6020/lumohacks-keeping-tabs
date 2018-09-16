import React, { Component } from 'react';
import Settings from './Settings';
import { Alert, Linking, Text, View } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import LoadingIndicator from "../../components/LoadingIndicator";
import { SENDGRID_API_KEY } from 'react-native-dotenv';

export default class SettingsContainer extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    constructor(props) {
        super(props);
        this.state = { text: '' }
    }

    sendEmail = () => {
        // TODO: fetch user name here and sponsor email
        const userName = "Barack Obama";
        const email = "keepingtabs@mailinator.com";
        const body = {
            "personalizations": [{ "to": [{ "email": email }] }],
            "from": { "email": "noreply@keepintabs.com" },
            "subject": "Monthly Report for " + userName,
            "content": [{ "type": "text/plain", "value": "and easy to do anywhere, even with cURL" }]
        };
        fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + SENDGRID_API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((response) => {
            if (response.status === 202) {
              Alert.alert(
                  'Sent!',
                  'Your sponsor will help you look at your results!',
                  [{text:'Ok', onPress: () => console.log('Ok pressed')}]
              );
            } else {
              Alert.alert(
                  'Failed to send email',
                  'Unable to send to ' + email + '. Please try again later.',
                  [{text:'Ok', onPress: () => console.log('Ok pressed')}]
              );
            }
        }).catch(err => {
            Alert.alert(
                'Failed to send email',
                'Unable to send to ' + email + '. Please try again later.',
                [{text:'Ok', onPress: () => console.log('Ok pressed')}]
            );
        });
    };

    submitSponsor = () => {
        // send in this.state.text (do email validation here first)
        if (this.validateEmail(this.state.text)) {
            console.log("validated");
            // submit email to backend
        } else {
            console.log("invalid email");
            // alert invalid email format
        }
    };

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    changeTextHandler = (text) => {
        this.setState({ text })
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
                    if (loading) return <View
                        style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}><LoadingIndicator /></View>
                    if (error) return <Text>Error: </Text>;
                    return <Settings navigation={this.props.navigation} text={this.state.text} changeTextHandler={this.changeTextHandler} sendEmail={this.sendEmail} submitSponsor={this.submitSponsor} />;
                }}
            </Query>
        )

    }
}
