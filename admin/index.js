import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import { Sequelize } from 'sequelize';
import express from 'express';
const app = express();

// Initialize Sequelize with your connection configuration
// Note: You must fill in your own connection details
const sequelize = new Sequelize('sqlite::memory:'); // Example for SQLite

// Set up AdminJS with the correct adapter
AdminJS.registerAdapter({Database: AdminJSSequelize, Resource: AdminJSSequelize.Resource});

const admin = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
});

// Build and use a router which will handle all AdminJS routes
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate: async (email, password) => {
    // Add your own authentication mechanism here
    return email === 'admin@example.com' && password === 'password'; // Replace with actual credentials check
  },
  cookiePassword: 'sessionKey',
});
app.use(admin.options.rootPath, adminRouter);

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));