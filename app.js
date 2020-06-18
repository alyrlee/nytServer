var createError = require('http-errors');
var path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const http - require("http");
const hostnmae = '127.0.01';
const port = 8000;


app.use(morgan('common')); // let's see what 'common' format looks like
// app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const books = require('./books.js');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.get('./books', (req, res) => {
    const { search = "", sort } = req.query;
  
    if (sort) {
      if (!['title', 'rank'].includes(sort)) {
        return res
          .status(400)
          .send('Sort must be one of title or rank');
      }
    }
  
    let results = books
          .filter(book =>
              book
                .title
                .toLowerCase()
                .includes(search.toLowerCase()));
  
    if (sort) {
      results
        .sort((a, b) => {
          return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
      });
    }
    // app.get('/books', (req, res) => {
    res
      .json(results);
  });


  app.listen(port, hostnmae, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
  });

module.exports = app;