// Packages
const express = require('express')
const path = require('path')


// Modules
const dir = require('../utils/path')


// Routes
const router = express.Router()


// App
let page = null


// Middleware
router.get('/', (request, response, next) => {
    page = path.join(dir, 'public', 'index.html')
    response.sendFile(page)
})


// Exports
module.exports = {
    routes: router
}
