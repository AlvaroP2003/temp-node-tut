const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorization')

// !! req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// method which applies logger function to all routes
// app.use([logger,authorize])

// serve static files to express app
// app.use(express.static('./public'))

app.get('/',(req,res) => {
    res.send('Home')
})

app.get('/about', (req,res) => {
    res.send('About')
})

app.get('/api/products', (req,res) => {
    res.send('Products')
})

app.get('/api/items',[logger,authorize],(req,res) => {
    res.send(`Welcome to items ${req.query.user}`)
})

app.listen(5000, ()=> {
    console.log('Server is listening on port 5000...');
})