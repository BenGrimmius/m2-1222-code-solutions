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
  const values = req.body;
  values.score = Number(values.score);
  if (typeof values.name !== typeof 'string' || values.name === null) {
    res.status(400).json({
      error: 'Name must be valid.'
    });
    return;
  }
  if (typeof values.course !== typeof 'string' || values.course === null) {
    res.status(400).json({
      error: 'Course must be valid.'
    });
    return;
  }
  if (values.score < 0 || values.score > 100 || !(Number.isInteger(values.score))) {
    res.status(400).json({
      error: 'Score must be a positive integer between 0 and 100'
    });
    return;
  }

  const params = [values.name, values.course, values.score];
  db
    .query(text, params)
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

  const values = req.body;
  values.score = Number(values.score);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'Grade ID must be valid'
    });
    return;
  }
  if (typeof values.name !== typeof 'string' || values.name === null) {
    res.status(400).json({
      error: 'Name must be valid.'
    });
    return;
  }
  if (typeof values.course !== typeof 'string' || values.course === null) {
    res.status(400).json({
      error: 'Course must be valid.'
    });
    return;
  }
  if (values.score < 0 || values.score > 100 || !(Number.isInteger(values.score))) {
    res.status(400).json({
      error: 'Score must be a positive integer between 0 and 100'
    });
  }

  const params = [gradeId, values.name, values.course, values.score];
  db
    .query(sql, params)
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
