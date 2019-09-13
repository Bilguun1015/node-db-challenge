const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./projects/project-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/', projectRouter);

server.get('/', (req, res) => {
    res.send('<h3>It is working!</h3>')
})


module.exports = server;