const { error } = require('console');
const {readFile, writeFile} = require('fs')

console.log('starting...')
readFile('./content/first.txt', 'utf-8', (err,result) => {
    if(err) {
        console.log(err);
        return
    }

    const first = result
    readFile('./content/first.txt', 'utf-8', (err,result) => {
        if(err) {
            console.log(err);
            return
        }

        const second = result
        writeFile(
            './content/result-async.txt',
            `Hello is the result : ${first}, ${second}`
            ,(err,result) => {
                if(err) {
                    console.log(err);
                    return
                }

                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task...');
