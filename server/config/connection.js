const mongoose = require('mongoose');

mongoose.connect(
    //change database name
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/deadcoderdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;