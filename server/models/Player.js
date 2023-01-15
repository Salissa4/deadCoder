var mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;

const playerSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    index: { unique: true },
    trim: true,
  },
  password: {
    type: String,
    required: true,
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

playerSchema.pre("save", function (next) {
  let player = this;
  // only hash the password if it has been modified (or is new)
  if (!player.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(player.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      player.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
