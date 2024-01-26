const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSSequelize = require("@adminjs/sequelize");
const express = require("express");
const app = express();
const { Database, Resource } = require("adminjs");
// Initialize AdminJS with the options
const admin = new AdminJS(adminJsOptions);

// Build and use a router which will handle all AdminJS routes
const adminRouter = AdminJSExpress.buildRouter(adminJs.build);
app.use(adminJsOptions.rootPath, adminRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
