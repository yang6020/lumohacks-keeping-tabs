<<<<<<< HEAD
import { ApolloProvider } from "react-apollo";

import React, { Component } from 'react';
import RootStackNavigator from "./navigation/RootStackNavigation";
import client from "./config/api";
=======
import React, { Component } from 'react';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import createRootNavigator from './navigation/RootStackNavigation';
import { getUser } from './config/models';
>>>>>>> finish AccountForm add login-signup-logout functionality with validation

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }

  componentDidMount() {
    let currentUser = false;
    getUser().map(user => (currentUser = user));
    if (currentUser) this.setState({ signedIn: true });
  }

  render() {
    const Layout = createRootNavigator(this.state.signedIn);
    return (
      <ApolloProvider client={client}>
<<<<<<< HEAD
      <RootStackNavigator />
=======
        <Layout />
>>>>>>> finish AccountForm add login-signup-logout functionality with validation
      </ApolloProvider>
    );
  }
}
