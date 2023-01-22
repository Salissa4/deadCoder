const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Player {
        _id: ID
        username: String
        password: String
        avatar: String
        codingLang: String
        pongScores: [PongScore]
        ticTacToeScores: [TicTacToeScore]
    }

    type PongScore {
        _id: ID
        userId: Player
        pongScoreValue: Int
        createdAt: String
    }

    type TicTacToeScore {
        _id: ID
        userId: Player
        ticTacToeScoreValue: Int
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
        # likes
        me: Player
    }

    type Mutation {
        addPlayer(username: String!, password: String!, avatar: String!, codingLang: String ): Auth
        login(username: String!, password: String!): Auth
        addPongScore(userId: ID!, score: Int!): PongScore
        addTicTacToeScore(userId: ID!, ticTacToeScoreValue: Int!): TicTacToeScore
        # addLike(game: String!, likeType: String): Like
    }
`;
module.exports = typeDefs;
