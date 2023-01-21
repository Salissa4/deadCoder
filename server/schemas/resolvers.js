const { AuthenticationError } = require("apollo-server-express");
const { Player, PongScore, TicTacToeScore } = require('../models')
// const { Player, Score/*, Like*/ } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    allPlayers: async () => {
      return Player.find().populate('pongScores').populate('ticTacToeScores');
    },
    player: async (parent, { _id }) => {
      return Player.findOne({ _id }).populate('pongScores').populate('ticTacToeScores');
    },
    allPongScores: async () => {
      return PongScore.find({}).sort({ createdAt: -1 }).populate('userId')
    },
    allTicTacToeScores: async () => {
      return TicTacToeScore.find({}).sort({ createdAt: -1 }).populate('userId')
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

// const resolvers = {
//   Query: {
//     players: async () => {
//       return Player.find().populate("scores");
//     },
//     player: async (parent, { username }) => {
//       return Player.findOne({ username }).populate("scores");
//     },
//     scores: async () => {
//       //const params = username ? { username } : {};
//       return Score.find().sort({ createdAt: -1 });
//     },
//     score: async (parent, { scoreId }) => {
//       return Score.findOne({ _id: scoreId });
//     },
//     // likes: async () => {},
//     me: async (parent, args, context) => {
//       if (context.player) {
//         return Player.findOne({ _id: context.player._id }).populate("scores");
//       }
//       throw new AuthenticationError("You need to be logged in!");
//     },
//   },
//   Mutation: {
//     addPlayer: async (parent, { username, password, avatar, codingLang }) => {
//       const player = await Player.create({
//         username,
//         password,
//         avatar,
//         codingLang,
//       });
//       const token = signToken(player);
//       return { token, player };
//     },
//     login: async (parent, { username, password }) => {
//       const player = await Player.findOne({ username });

//       if (!player) {
//         throw new AuthenticationError("No player found with this username");
//       }

//       const correctPw = await player.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError("Incorrect credentials");
//       }

//       const token = signToken(player);

//       return { token, player };
//     },
//     addScore: async (parent, { game, scoreValue }, context) => {
//       if (context.player) {
//         const newScore = await Score.create({
//           username: context.player.username,
//           game,
//           scoreValue,
//         });

//         await Player.findOneAndUpdate(
//           { _id: context.player._id },
//           { $addToSet: { scores: newScore._id } }
//         );

//         return newScore;
//       }

//       throw new AuthenticationError("You need to be logged in!");
//     },
//     // addLike: async (parent, { game, likeType }, context) => {
//     //     if (context.player) {
//     //       const like = await Like.create({
//     //         game,
//     //         likeType,
//     //       })

//     //       return like;
//     //     }
//     //     throw new AuthenticationError('You need to be logged in!');
//     //   },
//   },
// };

module.exports = resolvers;
