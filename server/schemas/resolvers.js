const { AuthenticationError } = require("apollo-server-express");
const { Player, PongScore, TicTacToeScore, TetrisScore, LightsOutScore } = require('../models')
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    allPlayers: async () => {
      return Player.find().populate('pongScores').populate('ticTacToeScores').populate('tetrisScores').populate('lightsOutScores');
    },
    player: async (parent, { _id }) => {
      return Player.findOne({ _id }).populate('pongScores').populate('ticTacToeScores').populate('tetrisScores').populate('lightsOutScores');
    },
    allPongScores: async () => {
      return PongScore.find({}).sort({ createdAt: -1 }).populate('userId')
    },
    allTicTacToeScores: async () => {
      return TicTacToeScore.find({}).sort({ createdAt: -1 }).populate('userId')
    },
    allTetrisScores: async () => {
      return TetrisScore.find({}).sort({ createdAt: -1 }).populate('userId')
    },
    allLightsOutScores: async () => {
      return LightsOutScore.find({}).sort({ createdAt: -1 }).populate('userId')
    },
    me: async (parent, args, context) => {
      if (context.player) {
        return Player.findOne({ _id: context.player._id }).populate("scores");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addPlayer: async (parent, { username, password, avatar, codingLang }) => {
      const player = await Player.create({
        username,
        password,
        avatar,
        codingLang,
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

    updateAvatar: async (parent, { userId, avatar }) => {
      return await Player.findOneAndUpdate(
        { _id: userId }, 
        { avatar },
        // Return the newly updated object instead of the original
        { new: true }
      );
    },

    addPongScore: async (parent, { userId, score }) => {
      if (userId) {
        const newScore = await PongScore.create(
          {
            userId: userId,
            pongScoreValue: score
          }
        );

        await Player.findOneAndUpdate(
          { _id: userId },
          { 
            $addToSet: { 
              pongScores: newScore._id,
            } 
          }
        );

        return newScore;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addTetrisScore: async (parent, { userId, score }) => {
      if (userId) {
        const newScore = await TetrisScore.create(
          {
            userId: userId,
            tetrisScoreValue: score
          }
        );

        await Player.findOneAndUpdate(
          { _id: userId },
          { 
            $addToSet: { 
              tetrisScores: newScore._id,
            } 
          }
        );

        return newScore;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addTicTacToeScore: async (parent, { userId, score }) => {
      if (userId) {
        const newScore = await TicTacToeScore.create(
          {
            userId: userId,
            ticTacToeScoreValue: score
          }
        );

        await Player.findOneAndUpdate(
          { _id: userId },
          { 
            $addToSet: { 
              ticTacToeScores: newScore._id,
            } 
          }
        );

        return newScore;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addLightsOutScore: async (parent, { userId, score }) => {
      if (userId) {
        const newScore = await LightsOutScore.create(
          {
            userId: userId,
            lightsOutScoreValue: score
          }
        );

        await Player.findOneAndUpdate(
          { _id: userId },
          { 
            $addToSet: { 
              lightsOutScores: newScore._id,
            } 
          }
        );

        return newScore;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    // addLike: async (parent, { game, likeType }, context) => {
    //     if (context.player) {
    //       const like = await Like.create({
    //         game,
    //         likeType,
    //       })

    //       return like;
    //     }
    //     throw new AuthenticationError('You need to be logged in!');
    //   },
  },



};

module.exports = resolvers;
