import express from 'express';
import AdminJS from 'adminjs';
import AdminJSSqlite from 'adminjs-sqlite';
import AdminJSExpress from '@adminjs/express';
import { verbose } from 'sqlite3';

const sqlite3 = verbose();

    class Server {
      constructor() {
        const port = process.env.PORT || 3001;
        const app = express();
        import('http').then(http => {
          const server = http.createServer(app);
          import('socket.io').then(({ Server: SocketIoServer }) => {
            const io = new SocketIoServer(server, {
              cors: {
                origin: "*",
              },
            });
          });
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
    io.on('connection', (socket) => {
      console.log('New client connected', socket.id);
      socket.on('disconnect', () => {
        console.log('a user disconnected', socket.id, socket.handshake.headers['x-forwarded-for']);
      });

      socket.on('adminDataChanged', (data) => {
        console.log('admin Data Changed', socket.id, socket.handshake.headers['x-forwarded-for'], data);
        io.emit('adminDataChanged', data);
        socket.emit('adminDataChanged', adminJs.data.models);
      });
      this.app = app;
      this.server = server;
      this.io = io;
      this.port = port;
    }
  }

  start() {
    this.server.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    });
  

    return this.io;
  }
}

export default Server;