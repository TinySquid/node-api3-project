// code away!
// ok =)
//For .env config
require('dotenv').config();

const express = require('express');

const cors = require('cors');

//MIDDLEWARE
const logger = require('./logger/logger');

//ROUTES
const userRouter = require('./users/userRouter');

const port = process.env.PORT || 4000;

const server = express();

server.use(express.json());

server.use(cors());

server.use(logger);

server.get('/', (req, res) => {
  res.status(200).json({ message: "Hello :)" })
});

server.use('/users', userRouter);

server.use((err, req, res, next) => {
  console.error(err);

  res
    .status(500)
    .json({ message: 'There was an error performing the required operation' });
});





server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});


