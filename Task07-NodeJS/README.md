To launch a project you need to perform the following steps:
- to launch frontend part:
  1. Go to frontend/ folder, type `npm i` to get all dependencies.
  2. Start `npm start`.
- please do the same for backend stuff.
- also u need to launch MongoDB on you local machine:
  1. Download it from https://www.mongodb.com/download-center?jmp=nav#community.
  2. Launch `mongod.exe` from bin folder after installation.
  3. Create `data/db` folder in your route (if needed).

To simulate fakeDevice, please do the followings:
- launch fakeDevice.js file at free port with `node fakeDevice.js 8080`(portName);
- open api.js file in frontend folder, comment  'switchOn' and 'switchOff' on lines 32 and 38 respectively,
  comment out methods with the same names after 'for fakeDevice' comment message;
- create a new device via UI with the portName from point one;

Happy coding!