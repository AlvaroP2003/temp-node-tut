const express = require('express')
const app = express();
// import products json data from './data.js'
const {products} = require('./data')

// responds with json format data
app.get('/',(req,res)=> {
    res.send("<h1>Home Page</h1><a href='/api/products'>products</a>") // creating custom api path
})

// responding to that custom api path
app.get('/api/products',(req,res)=> {
    const newProducts = products.map((product)=> {
        const {id,name,category} = product; // destructure to only get specific data from the api
        return {id,name,category}
    })
    res.json(newProducts)
})

// specific item repsonse
app.get('/api/products/:productId',(req,res)=> {
    const {productId} = req.params // destructuring from params object
    const singleProduct = products.find(
        (product)=> product.id === Number(productId))
    
        if(!singleProduct) {
            return res.status(404).send('Product does not exist!')
        }
         
    return res.json(singleProduct)
})

app.listen(5000,()=> {
    console.log("Listening on port 5000...");
})