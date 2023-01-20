const db = require('../config/connection');
const { Player, Score } = require ('../models');
const playerSeeds = require ('./playerSeeds.json');
const scoreSeeds = require ('./scoreSeeds.json');

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