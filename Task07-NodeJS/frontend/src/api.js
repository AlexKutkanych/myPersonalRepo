import axios from 'axios';
import { syncDeviceStateInGroup } from './utils';

const apiURL = 'http://localhost:4000';

export async function getDevices() {
    const response = await axios.get(`${apiURL}/devices`);
    return response.data;
}

export async function getDeviceById(deviceId) {
    const response = await axios.get(`${apiURL}/devices/${deviceId}`);
    return response.data;
}

export async function removeDevice(deviceId) {
    await axios.delete(`${apiURL}/devices/${deviceId}`);
}

export async function addDevice(device) {
  const response = await axios.post(`${apiURL}/devices`, device);

  if(response.status !== 201) {
    throw new Error('Device is not created');
  }
}

export async function updateDevice(deviceId, data) {
  await axios.put(`${apiURL}/devices/${deviceId}/on`, data);   
}

export async function switchOn(deviceId) {
    await updateDevice(deviceId, {
        state: 'on'
    });
}

export async function switchOff(deviceId) {
    await updateDevice(deviceId, {
        state: 'off'
    });
}

// for fakeDevice

// export async function switchOn(deviceId) {
//   await axios.put(`${apiURL}/devices/${deviceId}/on`);
// }

// export async function switchOff(deviceId) {
//   await axios.put(`${apiURL}/devices/${deviceId}/off`);
// }

export async function getDeviceLog(deviceId) {
  const response = await axios.get(`${apiURL}/logger/${deviceId}`);
  return response.data[0].logs;
}

// groups

export async function getGroups() {
  const response = await axios.get(`${apiURL}/groups`);
  return response.data;
}

export async function getGroupById(groupId) {
  const response = await axios.get(`${apiURL}/groups/${groupId}`);
  return response.data;
}

export async function addGroup(group) {
  const response = await axios.post(`${apiURL}/groups`, group);

  if(response.status !== 201) {
    throw new Error('Group is not created');
  }
}

export async function removeGroup(groupId) {
  await axios.delete(`${apiURL}/groups/${groupId}`);
}

export async function updateGroup(groupId, data) {
  await axios.put(`${apiURL}/groups/${groupId}`, data);   
}

export async function switchGroupOn(groupId, devices) {
    const newState = 'on';
    await updateGroup(groupId, {
        state: newState,
        devices: syncDeviceStateInGroup(devices, newState)
    });
}

export async function switchGroupOff(groupId, devices) {
    const newState = 'off';
    await updateGroup(groupId, {
        state: newState,
        devices: syncDeviceStateInGroup(devices, newState)
    });
}