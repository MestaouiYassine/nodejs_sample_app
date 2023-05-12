const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('Hi from employees app');
});

const port = process.env.OPENSHIFT_NODEJS_PORT || 5000;
const ip = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

app.listen(port, () => {
  console.log(`serve at http://${ip}:${port}`);
});

module.exports = app;
