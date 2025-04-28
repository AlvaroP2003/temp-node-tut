const {readFileSync, writeFileSync} = require('fs')

console.log('starting...')
// readFileSync(- path to file - , - file type -)
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// writeFileSync(- path of existing or new file - , - value to add - , - how to edit file -)
writeFileSync(
    './content/result-sync.txt',
    `Hello is the result : ${first}, ${second}`,
    {flag: 'a'}) // 'a' means append

console.log('done with task')
console.log('starting the next one...')

