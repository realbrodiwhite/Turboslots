const AdminJS = import("adminjs");
const AdminJSExpress = import("@adminjs/express");
const AdminJSSequelize = import("@adminjs/sequelize");
const express = import("express");
const app = express();
const { Database, Resource } = import("adminjs");
// Initialize AdminJS with the options
const admin = new AdminJS(adminJsOptions);

// Build and use a router which will handle all AdminJS routes
const adminRouter = AdminJSExpress.buildRouter(adminJs.build);
app.use(adminJsOptions.rootPath, adminRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
