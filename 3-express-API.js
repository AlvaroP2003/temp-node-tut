const express = require('express')
const app = express();
// import products json data from './data.js'
const {products} = require('./data');
const { slice } = require('lodash');

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


app.get('/api/v1/query',(req,res)=> {
    console.log(req.query)
    const { search,limit } = req.query
    let sortedProducts = [...products]


    // returns items that match the query
    if(search) {
        sortedProducts = sortedProducts.filter((product)=> {
            return product.name.startsWith(search)
        })
    }

    // returns the limit 
    if(limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    // Handles if search does not match url
    if(sortedProducts.length < 1) {
        // res.status(200).send('No product matched your search') -> this can also be used
        return res.status(200).json({success:true,data: []})
    }

    // Returns sortedProducts
    res.status(200).json(sortedProducts)
    res.send('Hello World');
})



app.listen(5000,()=> {
    console.log("Listening on port 5000...");
})