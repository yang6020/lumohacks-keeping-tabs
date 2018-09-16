import React from 'react';
import { adopt } from 'react-adopt';
import { Mutation, Query } from 'react-apollo';
import { ADD_PROS, ADD_CONS, GET_PROS, GET_CONS } from '../config/queries';

const addPros = ({ render }) => (
  <Mutation mutation={ADD_PROS}>
    {(mutation, { data, error, loading }) =>
      render({ mutation, data, error, loading })
    }
  </Mutation>
);
const addCons = ({ render }) => (
  <Mutation mutation={ADD_CONS}>
    {(mutation, { data, error, loading }) =>
      render({ mutation, data, error, loading })
    }
  </Mutation>
);

const getCons = ({ render }) => (
  <Query query={GET_CONS}>
    {({ loading, error, data }) => render({ loading, error, data })}
  </Query>
);

const getPros = ({ render }) => (
  <Query query={GET_PROS}>
    {({ loading, error, data }) => render({ loading, error, data })}
  </Query>
);

const ProConContainer = adopt({
  addPros,
  addCons,
  getCons,
  getPros,
});

export default ProConContainer;
