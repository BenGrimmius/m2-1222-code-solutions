const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const myArray = [];
  for (const students in grades) {
    myArray.push(grades[students]);
  }
  res.json(myArray);
});

app.delete('/api/grades/:id', (req, res) => {
  for (const id in grades) {
    if (id === req.params.id) {
      delete grades[id];
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // console.log('Listening on 3000!');
});
