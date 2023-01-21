const { Schema, model, default: mongoose } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Player = require('./Player');

const pongScoreSchema = new Schema({
  // Player attached to this score instance
  userId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Player',
     required: true,
  },
  // Final score value of score instance
  scoreValue: {
    type: Number,
    required: true,
  },
  // When this score instance was created
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Score = model('PongScore', pongScoreSchema);

module.exports = Score;