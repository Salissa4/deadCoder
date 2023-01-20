import { gql } from '@apollo/client';

export const QUERY_PLAYER = gql`
  query Player($username: String!) {
    player(username: $username) {
      _id
      username
      avatar
      codingLang
      scores {
        _id
        username
        game
        scoreValue
        createdAt
      }
    }
  }
`;

export const QUERY_SCORES = gql`
  query getScores {
    scores {
      _id
      username
      game
      scoreValue
      createdAt
    }
  }
`;

export const QUERY_SINGLE_SCORE = gql`
  query getSingleScore {
    score {
      _id
      username
      game
      scoreValue
      createdAt
    }
  }
`;

// Figure this out later, need to add "likes" to resolvers and typeDefs
// export const QUERY_LIKES = gql``; 