const express = require('express')
const app = express()
let {people} = require('./data')

// static files
app.use(express.static('./method-public'))



app.get('/api/people', (req,res)=> {
    res.status(200).json({success:true,data:people})
})


app.listen(5000, ()=> {
    console.log('Listening on port 5000...');
})