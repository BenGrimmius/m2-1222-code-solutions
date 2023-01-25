const fs = require('fs');

const jsonFile = require('./data.json');
const currentID = jsonFile.nextId;

function read() {
  for (const entry in jsonFile.notes) {
    console.log(`${entry}: ${jsonFile.notes[entry]}`);
  }
}

function create() {
  jsonFile.notes[currentID] = process.argv[3];
  jsonFile.nextId++;
  fs.writeFile('./data.json', JSON.stringify(jsonFile, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}

function remove() {
  const toDelete = process.argv[3];
  delete jsonFile.notes[toDelete];
  fs.writeFile('./data.json', JSON.stringify(jsonFile, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}

function update() {
  const toUpdate = process.argv[3];
  for (const id in jsonFile.notes) {
    if (toUpdate === id) {
      jsonFile.notes[toUpdate] = process.argv[4];
      fs.writeFile('./data.json', JSON.stringify(jsonFile, null, 2), 'utf8', err => {
        if (err) throw err;
      });
    }
  }
}

if (process.argv[2] === 'update') {
  update();
}

if (process.argv[2] === 'delete') {
  remove();
}

if (process.argv[2] === 'create') {
  create();
}

if (process.argv[2] === 'read') {
  read();
}
