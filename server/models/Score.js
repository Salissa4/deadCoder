const { Schema, model, default: mongoose } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const scoreSchema = new Schema({
  // Player attached to this score instance
  username: {
     type: String,
     required: true,
  },
  // Name of the game that is attached to this score instance
  game: {
    type: String,
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

const Score = model('Score', scoreSchema);

module.exports = Score;
