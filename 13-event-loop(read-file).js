// NB* Callback functions are run after immediate code

const {readFile} = require('fs')

console.log('started the first task');

// CHECK FILE PATH
readFile('./content/first.txt', 'utf-8', (err,result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task'); 
