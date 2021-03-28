const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loggerSchema = new Schema({
  deviceId: String,
  deviceName: String,
  logs: [
    {
      message: String,
      date: String
    }
  ]
});

const loggerModel = mongoose.model('Logger', loggerSchema);

module.exports = loggerModel; 

