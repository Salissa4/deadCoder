const db = require('../config/connection');
const { Player, Scores } = require ('../models');
const playerSeeds = require ('./playerSeeds.json');
const scoreSeeds = require ('./scoreSeeds.json');

//TODO call the playerSchema.pre function to hash plain password