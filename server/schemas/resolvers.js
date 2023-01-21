const { AuthenticationError } = require("apollo-server-express");
const { Player, PongScore, TicTacToeScore } = require('../models')
// const { Player, Score/*, Like*/ } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    players: async () => {
      return Player.find();
      // return Player.find().populate("scoreValue");
    },
    player: async (parent, { _id }) => {
      return Player.findOne({ _id });
    },
    // scores: async () => {
    //   //const params = username ? { username } : {};
    //   return Score.find().sort({ createdAt: -1 });
    // },
    // score: async (parent, { scoreId }) => {
    //   return Score.findOne({ _id: scoreId });
    // },
    // // likes: async () => {},
    // me: async (parent, args, context) => {
    //   if (context.player) {
    //     return Player.findOne({ _id: context.player._id }).populate("scores");
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },




  // Mutation: {
  //   addPlayer: async (parent, { username, password, avatar, codingLang }) => {
  //     const player = await Player.create({
  //       username,
  //       password,
  //       avatar,
  //       codingLang,
  //     });
  //     const token = signToken(player);
  //     return { token, player };
  //   },
  //   login: async (parent, { username, password }) => {
  //     const player = await Player.findOne({ username });

  //     if (!player) {
  //       throw new AuthenticationError("No player found with this username");
  //     }

  //     const correctPw = await player.isCorrectPassword(password);

  //     if (!correctPw) {
  //       throw new AuthenticationError("Incorrect credentials");
  //     }

  //     const token = signToken(player);

  //     return { token, player };
  //   },
  //   addScore: async (parent, { game, scoreValue }, context) => {
  //     if (context.player) {
  //       const newScore = await Score.create({
  //         username: context.player.username,
  //         game,
  //         scoreValue,
  //       });

  //       await Player.findOneAndUpdate(
  //         { _id: context.player._id },
  //         { $addToSet: { scores: newScore._id } }
  //       );

  //       return newScore;
  //     }

  //     throw new AuthenticationError("You need to be logged in!");
  //   },


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
  // },



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
