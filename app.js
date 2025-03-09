const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <p>Try sending a request to /error and see what happens</p>
    <p>hi this is matt changing the image yooooo</p>
    <p>hi this is matt changing the image for the second time</p>
    <p>hi this is matt changing the image for the third time</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
