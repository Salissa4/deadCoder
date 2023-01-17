const db = require('../config/connection');
const { Player, Scores } = require ('../models');
const playerSeeds = require ('./playerSeeds.json');
const scoreSeeds = require ('./scoreSeeds.json');

db.once('open', async () => {
    try {
      await Scores.deleteMany({});
      await Player.deleteMany({});
  
      await Player.create(playerSeeds);
        //TODO what do i change thoughtAuthor to?
      for (let i = 0; i < scoreSeeds.length; i++) {
        const { _id, thoughtAuthor } = await Score.create(scoreSeeds[i]);
        const player = await Player.findOneAndUpdate(
            //TODO is username:player, and addToSet score: _id correct?
            { username: player },
            {
                $addToSet: {
                score: _id,
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