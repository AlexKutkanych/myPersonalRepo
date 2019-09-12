const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  name: String,
  address: String,
  port: Number,
  state: String,
  groupName: String,
});

const deviceModel = mongoose.model('Device', deviceSchema);

module.exports = deviceModel; 

