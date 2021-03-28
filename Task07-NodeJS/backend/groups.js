const router = require('express').Router();
const Group = require('./models/group');
const utils = require('./utils');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smartHouse');

const groupIdMapping = group => ({
  id: group._id,
  name: group.name,
  state: group.state,
  devices: group.devices,
});

router.get('/', async (req, res) => {
  const groups = await Group.find().exec();
  res.json(groups.map(groupIdMapping));
});

router.get('/:id', async (req, res) => {
  const groupId = req.params.id;

  const group = await Group.findById(groupId).exec();

  if(group) {
    res.json(groupIdMapping(group));
  } else {
    res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  const group = req.body;

  if(!group) {
    res.sendStatus(400);
  }

  await Group.create({
    state: 'off',
    ...group
  });

  res.sendStatus(201);
});

router.delete('/:id', async (req, res) => {
  const groupId = req.params.id;

  await Group.findByIdAndRemove(groupId).exec();
  
  res.sendStatus(200);
});

router.put('/:id', async (req, res) => {
  const groupId = req.params.id;
  const data = req.body;
  const groupState = req.body.state;
  const groupDevices = req.body.devices;
  const groupName = req.body.name;

  await Group.findByIdAndUpdate(groupId, data);
  await utils.updateDeviceGroupName(groupDevices, groupName);
  await utils.updateDeviceGroupState(groupDevices, groupState);

  res.sendStatus(201);
});


module.exports = router;