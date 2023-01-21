const db = require('../config/connection');
const { Player, PongScore, TicTacToeScore } = require ('../models');
const playerSeeds = require ('./playerSeeds.json');
const pongSeeds = require('./pongScoreSeeds.json')
const ticTacToeSeeds = require('./ticTacToeScoreSeeds.json')

db.once('open', async () => {
  try {
    await Player.deleteMany({});
    await PongScore.deleteMany({});
    await TicTacToeScore.deleteMany({});

    await Player.create(playerSeeds);

    for (let i = 0; i < pongSeeds.length; i++) {
      const randPlayer = await Player.aggregate([{ $sample: { size: 1 }}])
      const randPlayerID = randPlayer[0]._id

      const newScore = await PongScore.create(
        {
          userId: randPlayerID,
          pongScoreValue: pongSeeds[i].scoreValue
        }
      );

      await Player.findOneAndUpdate(
        { _id: randPlayerID },
        {
          $addToSet: {
            pongScores: newScore._id,
          },
        }
      );
    }

    for (let i = 0; i < ticTacToeSeeds.length; i++) {
      const randPlayer = await Player.aggregate([{ $sample: { size: 1 }}])
      const randPlayerID = randPlayer[0]._id

      const newScore = await TicTacToeScore.create(
        {
          userId: randPlayerID,
          ticTacToeScoreValue: ticTacToeSeeds[i].scoreValue
        }
      );

      await Player.findOneAndUpdate(
        { _id: randPlayerID },
        {
          $addToSet: {
            ticTacToeScores: newScore._id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

// db.once('open', async () => {
//   try {
//     await Score.deleteMany({});
//     await Player.deleteMany({});

//     await Player.create(playerSeeds);

//     for (let i = 0; i < scoreSeeds.length; i++) {
//       const { _id, username } = await Score.create(scoreSeeds[i]);
//       const player = await Player.findOneAndUpdate(
//         { username: username },
//         {
//           $addToSet: {
//             scores: _id,
//           },
//         }
//       );
//     }
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });