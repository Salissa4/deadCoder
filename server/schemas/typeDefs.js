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
        userId: ID
        pongScoreValue: Int
        createdAt: String
    }

    type TicTacToeScore {
        _id: ID
        userId: ID
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
        pongScore(_id: ID!): [PongScore]
        ticTacToeScores: [TicTacToeScore]
        ticTacToeScore(scoreId: ID!): [TicTacToeScore]
        # likes
        me: Player
    }

    type Mutation {
        addPlayer(username: String!, password: String!, avatar: String!, codingLang: String ): Auth
        login(username: String!, password: String!): Auth
        addPongScore(userId: ID!, scoreValue: Int!): PongScore
        addTicTacToeScore(userId: ID!, scoreValue: Int!): TicTacToeScore
        # addLike(game: String!, likeType: String): Like
    }
`;

// const typeDefs = gql`
//     type Player {
//         _id: ID
//         username: String
//         password: String
//         avatar: String
//         codingLang: String
//         scores: [Score]!
//     }

//     type Score {
//         _id: ID
//         username: String
//         game: String
//         scoreValue: Int
//         createdAt: String
//     }

//     # type Like {
//     #     _id: ID
//     #     game: String
//     #     likeType: String
//     # }

//     type Auth {
//         token: ID!
//         player: Player
//     }

//     type Query {
//         players: [Player]
//         player(username: String!): Player
//         scores(username: String): [Score]
//         score(scoreId: ID!): Score
//         # likes
//         me: Player
//     }

//     type Mutation {
//         addPlayer(username: String!, password: String!, avatar: String!, codingLang: String ): Auth
//         login(username: String!, password: String!): Auth
//         addScore(game: String!, scoreValue: Int): Score
//         # addLike(game: String!, likeType: String): Like
//     }
// `;
module.exports = typeDefs;
