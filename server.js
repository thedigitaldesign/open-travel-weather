// Packages
const express = require('express')
const path = require('path')
const parser = require('body-parser')


// Modules
const dir = require('./server/utils/path')
const root = require('./server/routes/root')


// App
const app = express()
const port = process.env.PORT || 4000


// Middleware
app.use(root.routes)

// app.use((request, response, next) => {
//     response.status(404).render('404', {
//         title: 'Page Not Found: Sad Cat Can'
//     })
// })


// Server
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
