const router = require('express').Router();
const Device = require('./models/device');
const mongoose = require('mongoose');
const utils = require('./utils');
const http = require('http');

mongoose.connect('mongodb://localhost/smartHouse');

const deviceIdMapping = device => ({
    id: device._id,
    name: device.name,
    address: device.address,
    port: device.port,
    state: device.state,
    groupName: device.groupName,
});

function sendRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
        if(res.statusCode !== 200) {
          reject(res.statusCode);
        } else {
          resolve();
        }
      });
  });
}

router.get('/', async (req, res) => {
  const devices = await Device.find().exec();
  res.json(devices.map(deviceIdMapping));
});

router.get('/:id', async (req, res) => {
  const deviceId = req.params.id;
  const device = await Device.findById(deviceId).exec();
  if (device) {
    res.json(deviceIdMapping(device));
  } else {
    res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  const device = req.body;

  if(!device) {
    res.sendStatus(400);
  }

  await Device.create({
    state: 'off',
    ...device
  }, (err, device) => {
    if(device) {
      utils.createLog(device._id, device);
    }
  });

  res.sendStatus(201);
});

router.delete('/:id', async (req, res) => {
  const deviceId = req.params.id;

  await Device.findByIdAndRemove(deviceId).exec();  
  await utils.createLog(deviceId, {}, 'delete');
  
  res.sendStatus(200);
});

router.put('/:id', async (req, res) => {
  const deviceId = req.params.id;
  const data = req.body;

  await Device.findByIdAndUpdate(deviceId, data).exec();
  await utils.createLog(deviceId, data);
  
  res.sendStatus(201);
});


// simulate fakeDevice

router.put('/:id/:cmnd', async (req, res) => {
  const deviceId = req.params.id;
  const device = await Device.findById(deviceId).exec();

  const commands = {
    on: 'Power%20On',
    off: 'Power%20off'
  }

  const command = commands[req.params.cmnd];

  if(!command) {
    res.sendStatus(400);
  }
  const url = `http://${device.address}:${device.port}/cm?cmnd=${command}`;

  try {
    await sendRequest(url);

    device.state = req.params.cmnd;
    await device.save();
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});


module.exports = router;