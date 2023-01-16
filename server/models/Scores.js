const { Schema, model, default: mongoose } = require('mongoose');

const scoresSchema = new Schema({
  // Player attached to this score instance
  user_name: {
     type: String,
     required: true,
  },
  // Name of the game that is attached to this score instance
  game: {
    type: String,
    required: true,
  },
  // Final score value of score instance
  score: {
    type: Number,
    required: true,
  },
  // When this score instance was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Scores = model('Scores', scoresSchema);

module.exports = Scores;
