const Logger = require('./models/logger');
const Device = require('./models/device');

const currentTime = new Date();

const newLog = (deviceId, { name, address, port }) => {
  Logger.create({
    deviceId,
    deviceName: name,
    logs: [
      {
        message: `Device ${name} is created at address ${address}:${port}`,
        date: currentTime
      }
    ]
  });
}

const updateLog = (deviceId, data, request) => {
  Logger.find({ deviceId }, function (err, device) {
    if(request) {
      Logger.findOneAndUpdate({ deviceId: deviceId },
        { $push: {logs: { message: `Device ${device[0].deviceName} is deleted`, date: currentTime }}}, () => null);  
    } else {
      Logger.findOneAndUpdate({ deviceId: deviceId },
        { $push: {logs: { message: `Device ${device[0].deviceName} is turned ${data.state}`, date: currentTime }}}, () => null);
    }
  });
}



const createLog = (deviceId, data, request) => {
    Logger.find({ deviceId }, function (err, device) {
      if(!device.length) {
        newLog(deviceId, data);
      } else {
        updateLog(deviceId, data, request);
      }
    });
}

const updateDeviceGroupName = (groupDevices, groupName) => {
  return groupDevices.map(({ id }) => {
      Device.findByIdAndUpdate({ _id: id }, { groupName: groupName }, () => null )});
}

const updateDeviceGroupState = (groupDevices, groupState) => {
  return groupDevices.map(({ id }) => {
      Device.findByIdAndUpdate({ _id: id }, { state: groupState }, () => null )});
}

module.exports = {
  createLog,
  updateDeviceGroupName,
  updateDeviceGroupState
};