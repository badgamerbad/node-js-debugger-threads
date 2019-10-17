const express = require("express");
const crypto = require("crypto");
const app = express();

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const portArgvIndex = process.argv.indexOf("--port");
const port = portArgvIndex > -1 ? process.argv[portArgvIndex + 1] : 3000;

if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    for(let i = 0; i < numCPUs; ++i) {
        cluster.fork();
    }
}
else {
    app.get('/performOperation', (req, res) => {
        crypto.pbkdf2('a', 'b', 1000000, 512, 'sha512', () => {
            res.send("pbkdf2 complete");
        });
    });
    app.get('/', (req, res) => {
        res.send("Hello World");
    });
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}