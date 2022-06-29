const DotEnv = require('dotenv');

DotEnv.config();

const Server = require('./server');
Server.startMicroServices();
Server.startTheServer();
