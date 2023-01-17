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
        score: Number,
        createdAt: Date
    }

    type Like {
        _id: Int!
        game: String
        likeType: String
    }

    type Query {
        players: [Player]
        player(id: Int!): Player
        scores: [Score]
        score(id: Int!): Score
    }

    input PlayerData {
        _id: Int!
        username: String
        avatar: String
        scores: [Scores]
    }

    type Mutation {
        addPlayer(username: String!, avatar: String!, ): Player
        login(username: String!, password: String!): Player
        addScore(game: String!, score: Number): Score
        addLike(game: String!, likeType: String): Like
    }
`;
module.exports = typeDefs;
