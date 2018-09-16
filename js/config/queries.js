import gql from 'graphql-tag';

export const SIGNUP_USER = gql`
  mutation SignupUser($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      id
      token
    }
  }
`;
export const AUTH_USER = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export const ADD_PROS = gql`
  mutation createPro($title: String!, $weight: Int!) {
    createPro(title: $title, weight: $weight) {
      id
      title
      weight
    }
  }
`;

export const ADD_CONS = gql`
  mutation createCon($title: String!, $weight: Int!) {
    createCon(title: $title, weight: $weight) {
      id
      title
      weight
    }
  }
`;

export const GET_PROS = gql`
  {
    allPros {
      id
      title
      weight
    }
  }
`;
export const GET_CONS = gql`
  {
    allCons {
      id
      title
      weight
    }
  }
`;
