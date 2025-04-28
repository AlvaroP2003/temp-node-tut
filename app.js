const express = require('express')
const path = requrie('path')
const app = express()


app.get('/',(res,res)=> {
    res.sendFile(path.resolve(__dirname,'./navbar.app/index.html'))
})

app.all('*',(req,res)=> {
    res.status(404).send('Page not found')
})

app.listen(5000,()=> {
    console.log('Server listening on port 5000');
})