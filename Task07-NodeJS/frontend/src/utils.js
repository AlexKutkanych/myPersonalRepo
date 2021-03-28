export const syncDeviceStateInGroup = (devicesArr, newState) => {
  return devicesArr.map(item => {
    return {
      ...item,
      state: newState
    }
  })
}