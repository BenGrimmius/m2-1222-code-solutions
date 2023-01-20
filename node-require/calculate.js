const add = require('./add');

const subtract = require('./subtract');

const multiply = require('./multiply');

const divide = require('./divide');

if (process.argv[3] === 'plus') {
  console.log(add(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'minus') {
  console.log(subtract(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'times') {
  console.log(multiply(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'over') {
  console.log(divide(process.argv[2], process.argv[4]));
}
