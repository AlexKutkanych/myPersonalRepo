const express = require('express');
const app = express();
const deviceRouter = require('./devices');
const groupRouter = require('./groups');
const loggerRouter = require('./loggers');

const port = 4000;

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use('/devices', deviceRouter);
app.use('/groups', groupRouter);
app.use('/logger', loggerRouter);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});