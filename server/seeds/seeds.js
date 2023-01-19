const db = require('../config/connection');
const { Player, Scores } = require ('../models');
const playerSeeds = require ('./playerSeeds.json');
const scoreSeeds = require ('./scoreSeeds.json');

db.once('open', async () => {
  await Player.deleteMany({}); //This deletes all players, so is kind of scary...
  await Player.create(playerSeeds);

  await Scores.deleteMany({}); //This deletes all score, so again is kind of scary...
  await Scores.create(scoreSeeds);

  console.log('all done!');
  process.exit(0);
});