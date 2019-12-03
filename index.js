// code away!
// ok =)
//For .env config
require('dotenv').config();

const express = require('express');

const cors = require('cors');

const port = process.env.PORT || 4000;

const server = express();

server.use(express.json());

server.use(cors());







server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});


