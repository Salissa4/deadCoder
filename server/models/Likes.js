const { Schema, model, default: mongoose } = require('mongoose');

const likesSchema = new Schema({
  // Name of the game that is attached to this likes instance
  game: {
    type: String,
    required: true,
  },
  // Final score value of score instance
  likeType: {
    type: String,
    enum: ['like', 'dislike'],
  },
});

const Likes = model('Likes', likesSchema);

module.exports = Likes;