const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../public/')));

app.get('/', (req, res) => {
  res.render('../public/index.html');
});

app.listen(port, () => {
  console.log(`express is listening on port ${port}`);
});