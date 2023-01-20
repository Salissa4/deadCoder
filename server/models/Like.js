const { Schema, model, default: mongoose } = require('mongoose');

const likeSchema = new Schema({
  // Name of the game that is attached to this likes instance
  game: {
    type: String,
    required: true,
  },
  // Final score value of score instance
  likeType: {
    type: String,
    required: true,
  },
});

const Like = model('like', likeSchema);

module.exports = Like;