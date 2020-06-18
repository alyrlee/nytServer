const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// Access-Control-Allow-Origin = "https://developer.mozilla.org";

const app = express();

app.use(morgan('common'));
app.use(cors());

const books = require('./books.js');

app.use(function(req, res, next) {  
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

app.get('/books', (req, res) => {
  const { search = "", sort } = req.query;

  if(sort) {
    if(!['title', 'rank'].includes(sort)) {
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

  if(sort) {
    results
      .sort((a, b) => {
        return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
    }); 
  }  

  res
    .json(results);
});

module.exports = app;