//TODO double check login user and add user mutation is correct
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!, $avatar: String) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, password: $password, $avatar: String) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//TODO need highscore model to complete
export const HighScore = gql`
  mutation addHighScore
  ()
`