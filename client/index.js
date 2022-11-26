const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
var http = require('http');
var methodOverride = require('method-override')
var fs = require('fs');
var path = require('path')

const app = express()
const port = 9615

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// GET ALL
app.get('', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('allAirports.html'));
});

// GET
app.get('/allAirports', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('allAirports.html'));
});

// GET
app.get('/search-airport', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('search-airport.html'));
});

// POST ALL
app.get('/insert-new-airport', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('insert-new-airport.html'));
});



app.listen(port, () => console.log(`Airports Frontend listening on port ${port}!`));


