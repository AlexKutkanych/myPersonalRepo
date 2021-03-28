const router = require('express').Router();
const Logger = require('./models/logger');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smartHouse');

router.get('/', async (req, res) => {
  const logs = await Logger.find().exec();
  res.json(logs);
});

router.get('/:id', async (req, res) => {
  const deviceId = req.params.id;
  const logs = await Logger.find({ deviceId }).select('logs').exec();
  if (logs.length) {
    res.json(logs);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;