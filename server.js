require('dotenv').config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

const colors = require('colors');
const morgan = require('morgan');

const { connectDB, connection } = require('./config/db');
connectDB();
connection.on('error', (err) => console.log(err));

const express = require('express');
const app = express();
const transactionsRouter = require('./routes/transactions.js');
app.use(express.json());
MODE === 'development' && app.use(morgan('dev'));
app.use('/api/v1/transactions', transactionsRouter);

if (MODE === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
  });
}

app.listen(PORT, () =>
  console.log(
    `Server running in ${MODE} mode on port ${PORT} & listening for requests.`
      .blue.bold
  )
);
