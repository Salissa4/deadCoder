const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Player {
        _id: ID
        username: String
        password: String
        avatar: String
        codingLang: String
        pongScores: [PongScore]
        tetrisScores: [TetrisScore]
        ticTacToeScores: [TicTacToeScore]
        lightsOutScores: [LightsOutScore]
    }

    type PongScore {
        _id: ID
        userId: Player
        pongScoreValue: Int
        createdAt: String
    }

    type TetrisScore {
        _id: ID
        userId: Player
        tetrisScoreValue: Int
        createdAt: String
    }

    type TicTacToeScore {
        _id: ID
        userId: Player
        ticTacToeScoreValue: Int
        createdAt: String
    }

    type LightsOutScore {
        _id: ID
        userId: Player
        lightsOutScoreValue: Int
        createdAt: String
    }

    # type Like {
    #     _id: ID
    #     game: String
    #     likeType: String
    # }

    type Auth {
        token: ID!
        player: Player
    }

    type Query {
        allPlayers: [Player]
        player(_id: ID!): Player
        allPongScores: [PongScore]
        allTicTacToeScores: [TicTacToeScore]
        allTetrisScores: [TetrisScore]
        allLightsOutScores: [LightsOutScore]
        # likes
        me: Player
    }

    type Mutation {
        addPlayer(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        updateAvatar(userId: ID!, avatar: String!): Player
        addPongScore(userId: ID!, score: Int!): PongScore
        addTicTacToeScore(userId: ID!, score: Int!): TicTacToeScore
        addTetrisScore(userId: ID!, score: Int!): TetrisScore
        addLightsOutScore(userId: ID!, score: Int!): LightsOutScore
        # addLike(game: String!, likeType: String): Like
    }
`;
module.exports = typeDefs;
