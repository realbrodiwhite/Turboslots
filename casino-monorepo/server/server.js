import express from 'express';
import AdminJS from 'adminjs';
import AdminJSSequelize from '@adminjs/sequelize';
import AdminJSExpress from '@adminjs/express';
import { Sequelize } from 'sequelize';

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Sequelize with your connection configuration
const sequelize = new Sequelize('sqlite::memory:'); // Example for SQLite

// Set up AdminJS with the correct adapter
AdminJS.registerAdapter({
  Database: AdminJSSequelize,
  Resource: AdminJSSequelize.Resource
});

const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
});

// Build and use a router which will handle all AdminJS routes
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    // Add your own authentication mechanism here
    return email === 'admin@example.com' && password === 'password'; // Replace with actual credentials check
  },
  cookiePassword: 'sessionKey',
});

app.use(adminJs.options.rootPath, adminRouter);

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.use((req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));