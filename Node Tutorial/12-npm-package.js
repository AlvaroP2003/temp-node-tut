// npm - global command, comes with node
// npm --version

// local dependancy - use it only in this particular project
//  - npm i <packageName>

// global dependancy - use it on any project
//  - npm install -g <packageName>
//  - sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)



// Lodash package example
const _  = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);
console.log('hello bru');