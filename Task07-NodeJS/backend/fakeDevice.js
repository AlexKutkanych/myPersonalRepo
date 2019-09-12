const express = require('express');

const port = parseInt(process.argv[2], 10);

if(!port) {
  console.error('Fake device port is not define');
  process.exit();
}

const app = express();
let isOn = false;

app.get('/cm', (req, res) => {
  const command = req.query.cmnd;
  console.log(`Command ${command}`);

  if(command === 'Power On') {
    isOn = true;
  } else if (command === 'Power off') {
    isOn = false;
  } else if (command === 'Power TOGGLE') {
    isOn = !isOn;
  }
  
  res.send(`Current status is ${isOn ? 'On' : 'Off'}`);
});

app.listen(port, () => {
  console.log(`Fake device is listening on http://127.0.01:${port}`);
})