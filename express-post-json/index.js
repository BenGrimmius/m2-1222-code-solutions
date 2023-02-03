const express = require('express');
const app = express();

let nextID = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const myArray = [];
  for (const newGrade in grades) {
    myArray.push(grades[newGrade]);
  }
  res.json(myArray);
});

const middleware = express.json();

app.use(middleware);

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextID;
  grades[nextID] = newGrade;
  nextID++;
  res.status(201);
  res.send(newGrade);
});

app.listen(3000, () => {
  // console.log('LISTENING');
});
