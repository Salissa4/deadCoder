const db = require('../config/connection');
const { Player, Score } = require ('../models');
const playerSeeds = require ('./playerSeeds.json');
const scoreSeeds = require ('./scoreSeeds.json');

// db.once('open', async () => {
//   await Player.deleteMany({}); //This deletes all players, so is kind of scary...
//   await Player.create(playerSeeds);

//   await Score.deleteMany({}); //This deletes all score, so again is kind of scary...
//   await Score.create(scoreSeeds);

//   console.log('all done!');
//   process.exit(0);
// });

db.once('open', async () => {
  try {
    await Score.deleteMany({});
    await Player.deleteMany({});

    await Player.create(playerSeeds);

    for (let i = 0; i < scoreSeeds.length; i++) {
      const { _id, username } = await Score.create(scoreSeeds[i]);
      const player = await Player.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            scores: _id,
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