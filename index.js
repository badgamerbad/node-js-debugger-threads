const express = require("express");
const crypto = require("crypto");
const app = express();
// const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

const cluster = require('cluster');

// if(cluster.isMaster) {
//     cluster.fork();
//     cluster.fork();
//     cluster.fork();
// }
// else {
//     app.get('/performOperation', (req, res) => {
//         crypto.pbkdf2('a', 'b', 10000, 512, 'sha512', () => {
//             res.send("pbkdf2 complete");
//         });
//     });
//     app.get('/', (req, res) => {
//         res.send("Hello World");
//     });
//     let port = 3000;
//     app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// }

// if(isMainThread) {
//     // This re-loads the current file inside a Worker instance.
//     new Worker(__filename);
//     new Worker(__filename);
//     new Worker(__filename);
//     let port = 3000;
//     app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// }
// else {
//     app.get('/performOperation', (req, res) => {
//         crypto.pbkdf2('a', 'b', 10000, 512, 'sha512', () => {
//             res.send("pbkdf2 complete");
//         });
//     });
//     app.get('/', (req, res) => {
//         res.send("Hello World");
//     });
// }

app.get('/performOperation', (req, res) => {
    crypto.pbkdf2('a', 'b', 10000, 512, 'sha512', () => {
        res.send("pbkdf2 complete");
    });
});
app.get('/', (req, res) => {
    res.send("Hello World");
});
let port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));