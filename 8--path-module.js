const path = require('path')

console.log(path.sep)


// Normalises path (removes unwanted seperators etc.)
const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)


// endpoint of file
const base = path.basename(filePath)
console.log('File endpoint : ',base);


// gives the absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log('Absolute Path : ' ,absolute);
