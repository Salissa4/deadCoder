const { Schema, model, default: mongoose } = require('mongoose');

const likesSchema = new Schema({
  // Name of the game that is attached to this likes instance
  game_name: {
    type: String,
    required: true,
  },
  // Final score value of score instance
  likes_count: {
    type: Number,
  },
  dislikes_count: {
    type: Number,
  },
});

const Likes = model('Likes', likesSchema);

module.exports = Likes;