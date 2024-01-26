const AdminJS = require('adminjs')
const adminJs = new AdminJS()
const AdminJSExpress = require('@adminjs/express')
const AdminJSSequelize = require('@adminjs/sequelize')

AdminJS.registerAdapter(AdminJSSequelize)
const admin = adminJs.buildAuthenticated{
  resources: {
    User: {
      properties: {
        email: {
          isVisible: {
            show: true,
          },
        },
      },
    },
  },
}
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const useradmin = adminJs.build{
  resources: {
    resource: require('./models/User'),
    options: {
      properties: {
        email: {
          isVisible: false,
        },
        password: {
          isVisible: false,
        },
      },
    },
  },
  
  
  
const { Database, Resource } = require('adminjs')

// Configure AdminJS options
const adminJsOptions = {
  databases: [], // Add databases here
  rootPath: '/admin',
  resources: [{ resource: Resource, options: { parent: { name: 'Monorepo' } } }], // Add resources here
  dashboard: {
    handler: async () => {
      // Custom dashboard handler
    },
    component: AdminJS.bundle('./my-dashboard-component')
  }
}

// Initialize AdminJS with the options
const admin = new AdminJS(adminJsOptions)

// Build and use a router which will handle all AdminJS routes
const adminRouter = AdminJSExpress.buildRouter(admin)
app.use(adminJsOptions.rootPath, adminRouter)

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
