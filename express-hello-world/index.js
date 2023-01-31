const express = require('express');

const app = express();

app.use(function (req, res) {
  // console.log('req', req.method);
  res.send('Hello World');
});

app.listen(3000, function () {
  // console.log('Confirmed listening on port 3000');
});
