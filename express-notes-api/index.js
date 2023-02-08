const express = require('express');
const app = express();
const fs = require('fs');
const jsonFile = require('./data.json');

const exJSON = express.json();
app.use(exJSON);

const unexpected = {
  error: 'An unexpected error occured.'
};

const notPosInt = {
  error: 'ID must be a positive integer'
};
const notInt = {
  error: 'ID must be an integer'
};

const contreq = {
  error: 'Content is a required field'
};

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const n in jsonFile.notes) {
    arr.push(jsonFile.notes[n]);
  }
  JSON.stringify(arr);
  res.send(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const notFound = {
    error: 'Cannot find note with id ' + req.params.id
  };

  if (req.params.id in jsonFile.notes) {
    res.send(jsonFile.notes[req.params.id]);
  } else if (!(req.params.id in jsonFile.notes) && Number(req.params.id) > 0 && Number.isInteger(Number(req.params.id)) === true) {
    res.status(404).send(notFound);
  } else if (Number(req.params.id) <= 0) {
    res.status(400).send(notPosInt);
  } else if (Number.isInteger(Number(req.params.id)) === false && Number(req.params.id) >= 0) {
    res.status(400).send(notInt);
  }
});

app.post('/api/notes', (req, res) => {
  if ('content' in req.body === true) {
    const newNote = req.body;
    newNote.id = jsonFile.nextId;
    jsonFile.notes[jsonFile.nextId] = newNote;
    fs.writeFile('./data.json', JSON.stringify(jsonFile, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).send(unexpected);
        return;
      }
      jsonFile.nextId++;
      res.status(201);
      res.send(newNote);
    });
  } else if ('content' in req.body === false) {
    const noCont = {
      error: 'Content is a required field'
    };
    res.status(400).send(noCont);
  }
});

app.delete('/api/notes/:id', (req, res) => {

  const notFound = {
    error: 'Cannot find note with id ' + req.params.id
  };

  if (req.params.id in jsonFile.notes) {
    delete jsonFile.notes[req.params.id];
    fs.writeFile('./data.json', JSON.stringify(jsonFile, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.send(unexpected);
        return;
      }
      res.sendStatus(204);
    });
  } else if (!(req.params.id in jsonFile.notes) && Number(req.params.id) > 0 && Number.isInteger(Number(req.params.id)) === true) {
    res.status(404).send(notFound);
  } else if (Number(req.params.id) <= 0) {
    res.status(400).send(notPosInt);
  } else if (Number.isInteger(Number(req.params.id)) === false && req.params.id >= 0) {
    res.status(400).send(notInt);
  }
});

app.put('/api/notes/:id', (req, res) => {

  const notFound = {
    error: 'Cannot find note with id ' + req.params.id
  };
  const updated = req.body;

  if (req.params.id in jsonFile.notes === true && 'content' in req.body === true) {
    updated.id = Number(req.params.id);
    jsonFile.notes[req.params.id] = updated;
    fs.writeFile('./data.json', JSON.stringify(jsonFile, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send(unexpected);
      }
      res.status(200).send(updated);
    });
  } else if (!(req.params.id in jsonFile.notes) && Number(req.params.id) > 0 && Number.isInteger(Number(req.params.id)) === true) {
    res.status(404).send(notFound);
  } else if (Number(req.params.id) < 0) {
    res.status(400).send(notPosInt);
  } else if (Number.isInteger(Number(req.params.id)) === false) {
    res.status(400).send(notInt);
  } else if ('content' in req.body === false) {
    res.status(400).send(contreq);
  }
});

app.listen(3000);
