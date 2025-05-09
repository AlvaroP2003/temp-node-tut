// middleware function
const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    next()
}

// export to 4-express-middleware.js
module.exports = logger