import { ApolloProvider } from "react-apollo";

import React, { Component } from 'react';
import RootStackNavigator from "./navigation/RootStackNavigation";
import client from "./config/api";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <RootStackNavigator />
      </ApolloProvider>
    );
  }
}