const express = require('express');
const AdminJS = require('adminjs');
const AdminJSSqlite = require('adminjs-sqlite');
const AdminJSExpress = require('@adminjs/express');
const sqlite3 = require("sqlite3").verbose();

class Server {
  constructor() {
    const port = process.env.PORT || 3001;
    const app = express();
    const http = require('http');
    const server = http.createServer(app);
    const SocketIo = require("socket.io");
    const io = new SocketIo.Server(server, {
      cors: {
        origin: "*",
      },
    });

    // Set up AdminJS
    AdminJS.registerAdapter({
      Database: AdminJSSqlite.Database,
      Resource: AdminJSSqlite.Resource,
    });

    const adminJs = new AdminJS({
      databases: [],
      rootPath: '/admin',
    });

    const router = AdminJSExpress.buildRouter(adminJs);

    app.use(adminJs.options.rootPath, router);

    app.use(express.static(__dirname + '/public'));
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });
    app.use((req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });
    // Set up Socket.io
    io.on('connection', (socket) =>
      console.log,
      'New client connected',
      socket.id,
      
      );
      socket.on('disconnect', () =>"a user disconnected"),
        console.log,
        'a user disconnected',
        socket.id,
        socket.handshake.headers['x-forwarded-for']
      );
      socket.on('adminDataChanged', (data) =>"),
        console.log,
        'admin Data Changed',
        socket.id,
        socket.handshake.headers['x-forwarded-for'],
        data
        );
        io.emit('adminDataChanged', data),
                
        socket.emit('adminDataChanged', adminJs.data.models);
    this.app = app;
    this.server = server;
    this.io = io;
    this.port = port;
  }

  start() {
    this.server.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    });
  

    return this.io;
  }
}

module.exports = Server;
