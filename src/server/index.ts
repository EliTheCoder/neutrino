import http = require("http");
import express = require("express");
import path = require("path");
import socketio = require("socket.io");

enum Port {
    TEST = 8080,
    RUN = 80
}

const port = Port.TEST;

const app = express();
app.use(express.static(path.join(__dirname, '../client')));

const server = app.listen(process.env.PORT || port, () => {
    console.log("SERVER RUNNING: PORT: " + port);
});

const io = require('socket.io')(server);
