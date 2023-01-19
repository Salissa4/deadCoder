const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Player {
        _id: ID
        username: String
        avatar: String
        codingLang: String
        scores: [Scores]
    }

    type Scores {
        _id: ID
        username: String
        game: String
        score: Int
    }

    type Likes {
        _id: ID
        game: String
        likeType: String
    }

    type Auth {
        token: ID!
        user: Player
    }

    type Query {
        players: [Player]
        player(username: String!): Player
        scores: [Scores]
        score(scoreId: ID!): Scores
        me: Player
    }

    type Mutation {
        addPlayer(username: String!, password: String!, avatar: String!, codingLang: String! ): Auth
        login(username: String!, password: String!): Auth
        addScore(game: String!, score: Int): Scores
        addLike(game: String!, likeType: String): Likes
    }
`;
module.exports = typeDefs;
