const http = require('server')

const server = http.createServer((req,res) => {
    console.log('request event');
    res.end('Hello World!')
})

const port = 5000

server.listen(port , () => {
    console.log(`Server listening on port ${port}...`);
    
})