const fs = require('fs');
const number = Math.random();
const data = number.toString() + '\n';

fs.writeFile('random.txt', data, 'utf8', err => {
  if (err) throw err;
});
