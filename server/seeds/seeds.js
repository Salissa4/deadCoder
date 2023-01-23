const db = require('../config/connection');
const { Player, PongScore, TetrisScore, TicTacToeScore, LightsOutScore } = require ('../models');
const playerSeeds = require ('./playerSeeds.json');
const pongSeeds = require('./pongScoreSeeds.json');
const tetrisSeeds = require('./tetrisScoreSeeds.json')
const ticTacToeSeeds = require('./ticTacToeScoreSeeds.json');
const lightsOutSeeds = require('./lightsOutScoreSeeds.json');

db.once('open', async () => {
  try {
    await Player.deleteMany({});
    await PongScore.deleteMany({});
    await TetrisScore.deleteMany({});
    await TicTacToeScore.deleteMany({});
    await LightsOutScore.deleteMany({});

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
    };

    for (let i = 0; i < tetrisSeeds.length; i++) {
      const randPlayer = await Player.aggregate([{ $sample: { size: 1 }}])
      const randPlayerID = randPlayer[0]._id

      const newScore = await TetrisScore.create(
        {
          userId: randPlayerID,
          tetrisScoreValue: tetrisSeeds[i].scoreValue
        }
      );

      await Player.findOneAndUpdate(
        { _id: randPlayerID },
        {
          $addToSet: {
            tetrisScores: newScore._id,
          },
        }
      );
    };

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

    for (let i = 0; i < lightsOutSeeds.length; i++) {
      const randPlayer = await Player.aggregate([{ $sample: { size: 1 }}])
      const randPlayerID = randPlayer[0]._id

      const newScore = await LightsOutScore.create(
        {
          userId: randPlayerID,
          lightsOutScoreValue: lightsOutSeeds[i].scoreValue
        }
      );

      await Player.findOneAndUpdate(
        { _id: randPlayerID },
        {
          $addToSet: {
            lightsOutScores: newScore._id,
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