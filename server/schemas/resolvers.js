const { AuthenticationError } = require("apollo-server-express");
const { Player, Scores, Likes } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    players: async () => {
      return Player.find().populate("scores");
    },
    player: async (parent, { username }) => {
      return Player.findOne({ username }).populate("scores");
    },
    scores: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Scores.find(params).sort({ createdAt: -1 });
    },
    score: async (parent, { scoreId }) => {
      return Scores.findOne({ _id: scoreId });
    },
    me: async (parent, args, context) => {
      if (context.player) {
        return Player.findOne({ _id: context.player._id }).populate("scores");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addPlayer: async (parent, { username, password, avatar, coding_lang }) => {
      const player = await Player.create({
        username,
        password,
        avatar,
        coding_lang,
      });
      const token = signToken(player);
      return { token, player };
    },
    login: async (parent, { username, password }) => {
      const player = await Player.findOne({ username });

      if (!player) {
        throw new AuthenticationError("No player found with this username");
      }

      const correctPw = await player.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(player);

      return { token, player };
    },
    addScore: async (parent, { game, score }, context) => {
      if (context.player) {
        const newScore = await Scores.create({
          username: context.player.username,
          game,
          score,
        });

        await Player.findOneAndUpdate(
          { _id: context.player._id },
          { $addToSet: { scores: newScore._id } }
        );

        return newScore;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addLike: async (parent, { game, likeType }, context) => {
        if (context.player) {
          const like = await Likes.create({
            game,
            likeType,
          })

          return like;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
  },
};

module.exports = resolvers;
