// code away!
// ok =)
//For .env config
require('dotenv').config();

const express = require('express');

const cors = require('cors');

//MIDDLEWARE
const logger = require('./logger/logger');

const port = process.env.PORT || 4000;

const server = express();

server.use(express.json());

server.use(cors());

server.use(logger);



server.get('/', (req, res) => {
  res.status(200).json({ message: "Hello :)" })
});



server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});


