const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('Hi from employees app');
});

const ip = 'localhost';

const port = 5000;

app.listen(port, () => {
  console.log(`serve at http://${ip}:${port}`);
});

module.exports = app;
