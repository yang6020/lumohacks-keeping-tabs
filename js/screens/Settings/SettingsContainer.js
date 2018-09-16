import React, { Component } from 'react';
import Settings from './Settings';
import { Alert, Linking, Text, View } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import LoadingIndicator from "../../components/LoadingIndicator";

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
        const body = {
            "personalizations": [{ "to": [{ "email": "v.chan36@gmail.com" }] }],
            "from": { "email": "noreply@keepintabs.com" },
            "subject": "Monthly Report for " + userName,
            "content": [{ "type": "text/plain", "value": "and easy to do anywhere, even with cURL" }]
        };
        const apikey = "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";
        fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + apikey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((response) => {
            console.log("##### SENDGRID", response);
        });
    };

    submitSponsor = () => {
        // send in this.state.text (do email validation here first)
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
