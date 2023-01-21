const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Player {
        _id: ID
        username: String
        password: String
        avatar: String
        codingLang: String
        scores: [Score]!
    }

    type Score {
        _id: ID
        username: String
        game: String
        scoreValue: Int
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
        players: [Player]
        player(username: String!): Player
        scores(username: String): [Score]
        score(scoreId: ID!): Score
        # likes
        me: Player
    }

    type Mutation {
        addPlayer(username: String!, password: String!, avatar: String!, codingLang: String ): Auth
        login(username: String!, password: String!): Auth
        addScore(game: String!, scoreValue: Int): Score
        # addLike(game: String!, likeType: String): Like
    }
`;
module.exports = typeDefs;
