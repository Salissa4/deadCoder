import { gql } from '@apollo/client';

export const QUERY_ALL_PLAYERS = gql`
  query AllPlayers {
    allPlayers {
      _id
      username
      avatar
      codingLang
      ticTacToeScores {
        _id
        ticTacToeScoreValue
        createdAt
      }
      pongScores {
        _id
        pongScoreValue
        createdAt
      }
      tetrisScores {
        _id
        tetrisScoreValue
        createdAt
      }
    }
  }
`;

export const QUERY_PLAYER = gql`
  query Player($id: ID!) {
    player(_id: $id) {
      _id
      username
      avatar
      codingLang
      ticTacToeScores {
        _id
        ticTacToeScoreValue
        createdAt
      }
      pongScores {
        _id
        pongScoreValue
        createdAt
      }
      tetrisScores {
        _id
        tetrisScoreValue
        createdAt
      }
    }
  }
`

export const QUERY_TICTACTOE_SCORES = gql`
  query AllTicTacToeScores {
    allTicTacToeScores {
      _id
      ticTacToeScoreValue
      userId {
        _id
        username
      }
      createdAt
    }
  }
`;

export const QUERY_PONG_SCORES = gql`
  query AllPongScores {
    allPongScores {
      _id
      pongScoreValue
      userId {
        _id
        username
      }
      createdAt
    }
  }
`;

export const QUERY_TETRIS_SCORES = gql`
  query AllTetrisScores {
    allTetrisScores {
      _id
      tetrisScoreValue
      userId {
        _id
        username
      }
      createdAt
    }
  }
`;
