/* eslint-disable no-console */
const express = require('express');

const app = express();
const db = require('../database/db.js');

app.use(express.static('dist'));

app.get('/:id', (req, res) => {
  const productNumber = req.params.id;
  db.SimilarProducts.find({ id: productNumber }).then((similarProducts) => {
    res.send(similarProducts);
  });
});

db.connect.on('error', console.error.bind(console, 'connection error:'));
db.connect.once('open', () => {
  console.log('Connected to DB!');
});

const port = 3001;

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});
