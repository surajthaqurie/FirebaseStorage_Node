require('dotenv').config();

const http = require('http');
const app = require('./app');

const server = http.createServer(app);


const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server Listening on Port ${port}...at` + new Date(Date.now()));
});


process.on('SIGTERM', () => {
    server.close(() => {
        process.exit(0);
    });
});

module.exports = server;