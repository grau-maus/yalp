import express from 'express';
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');


const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});
