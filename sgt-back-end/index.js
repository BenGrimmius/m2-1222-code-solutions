const pg = require('pg');
const express = require('express');
const app = express();

const exJson = express.json();
app.use(exJson);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer.'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
      where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with grade ID ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const text =
  `
  INSERT INTO grades(name, course, score)
  VALUES($1, $2, $3) RETURNING *
  `;
  const values =
  ['Annel Sanchez', 'Sanchez', 100];
  if (typeof values[0] !== typeof 'string' || values[0] === null) {
    res.status(400).json({
      error: 'Name must be valid.'
    });
    return;
  }
  if (typeof values[1] !== typeof 'string' || values[1] === null) {
    res.status(400).json({
      error: 'Course must be valid.'
    });
    return;
  }
  if (values[2] < 0 || values[2] > 100 || !(Number.isInteger(values[2]))) {
    res.status(400).json({
      error: 'Score must be a positive integer between 0 and 100'
    });
    return;
  }

  db
    .query(text, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(e => {
      console.error(e.stack);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const sql =
    `
    UPDATE "grades"
    SET "name" = $2,
      "course" = $3,
      "score" = $4
    WHERE "gradeId" = $1 RETURNING *
    `;

  const gradeId = Number(req.params.gradeId);

  const values =
    [gradeId, 'Annel Sanchez', 'Art', 75];

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'Grade ID must be valid'
    });
    return;
  }
  if (typeof values[1] !== typeof 'string' || values[1] === null) {
    res.status(400).json({
      error: 'Name must be valid.'
    });
    return;
  }
  if (typeof values[2] !== typeof 'string' || values[2] === null) {
    res.status(400).json({
      error: 'Course must be valid.'
    });
    return;
  }
  if (values[3] < 0 || values[3] > 100 || !(Number.isInteger(values[3]))) {
    res.status(400).json({
      error: 'Score must be a positive integer between 0 and 100'
    });
  }
  db
    .query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with grade ID ${gradeId}`
        }); return;
      }
      res.status(200).json(result.rows[0]);
    })
    .catch(e => {
      console.error(e.stack);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const sql =
  `
  DELETE
  FROM "grades"
  WHERE "gradeId" = $1
  RETURNING *
  `;

  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const params = [gradeId];

  db
    .query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with grade ID ${gradeId}`
        }); return;
      }
      res.status(204).json(result.rows[0]);
    })
    .catch(e => {
      console.error(e.stack);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000);
