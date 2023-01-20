import { gql } from '@apollo/client';

export const LOGIN_PLAYER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      player {
        _id
        username
        codingLang
        avatar
      }
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation addPlayer($username: String!, $password: String!, $avatar: String!, $codingLang: String!) {
    addPlayer(username: $username, password: $password, avatar: $avatar, codingLang: $codingLang) {
      token
      player {
        _id
        username
        avatar
        codingLang
      }
    }
  }
`;

export const ADD_SCORE = gql`
  mutation addScore($game: String!, $scoreValue: Int) {
    addScore(game: $game, scoreValue: $scoreValue) {
      _id
      username
      game
      scoreValue
      createdAt
    }
  }
`

// export const ADD_LIKE = gql``;