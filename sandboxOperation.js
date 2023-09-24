const { exec, execFile, execSync } = require('child_process');
require("dotenv").config({path: './.env'})
var param = process.argv.slice(2);

var client_id = process.env.CLIENT_ID
var client_secret = process.env.CLIENT_SECRET

switch (param[0]) {
    case 'start': startSandbox();
        break;
    case 'stop': stopSandbox();
        break;
    case 'test': test();
        break;
    default:
        break;
}

function test() {
    execSync('sh test.sh',  (error, stdout, stderr) => {
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
}

function startSandbox() {
    exec('sh start.sh', (error, stdout, stderr) => {
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
}

function stopSandbox() {
    exec('sh stop.sh', (error, stdout, stderr) => {
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
}


