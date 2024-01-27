import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import express from 'express';
const app = express();

// Initialize AdminJS with the options
const admin = new AdminJS(adminJsOptions);

// Build and use a router which will handle all AdminJS routes
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate: async (email, password) => {
    // Add your own authentication mechanism here
    return true;
  },
  cookiePassword: 'sessionKey'
});
app.use(adminJsOptions.rootPath, adminRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
