const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

class Player extends model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

const playerSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  coding_lang: {
    type: String,
    required: true,
  },
});

const Player = model("Player", playerSchema);

module.exports = Player;
