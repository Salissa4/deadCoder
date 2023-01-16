const { Schema, model, default: mongoose } = require('mongoose');

const ScoresSchema = new Schema({
  // Player attached to this score instance
  player_id: {
     type: Schema.Types.ObjectId,
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

const Scores = model('Scores', ScoresSchema);

module.exports = Scores;
