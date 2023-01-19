const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Player {
        _id: Int!
        username: String
        avatar: String
        scores: [Scores]
        code_lang: String
    }

    type Scores {
        _id: Int!
        username: String
        game: String
        score: Int
    }

    type Likes {
        _id: Int!
        game: String
        likeType: String
    }

    type Query {
        players: [Player]
        player(id: Int!): Player
        scores: [Scores]
        score(id: Int!): Scores
        me: Player
    }

    type Mutation {
        addPlayer(username: String!, avatar: String!, ): Player
        login(username: String!, password: String!): Player
        addScore(game: String!, score: Int): Scores
        addLike(game: String!, likeType: String): Likes
    }
`;
module.exports = typeDefs;
