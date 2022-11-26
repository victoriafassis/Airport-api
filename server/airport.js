const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite')

const app = express()
const port = 3000

//db: any
open({
  filename: 'airports.db',
  driver: sqlite3.Database,
  verbose: true
}).then((database) => { 
    db = database;
})

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET ALL
app.get('/api/v1/aeroportos', (req, res) => {
    // A quantidade de aeroportos que aparecem foi limitada para a página conseguir carregar sem demora.
    db.all('SELECT * FROM airports LIMIT 50').then((data) => {
        res.json(data);})
});

// GET DETAIL
app.get('/api/v1/aeroportos/:iata', (req, res) => {
    const iata = req.params.iata;
    const sqlCommand = 'SELECT * FROM airports WHERE codigo_iata = "' + iata + '"';
    db.all(sqlCommand).then((data) => {
        res.json(data);
    })
});

// POST
app.post('/api/v1/aeroportos', (req, res) => {
    const params = req.body;

    // foi necessário extrair os objetos do cada linha, e posteriormente concatená-los em formato de string
    const values = extractObjPropertiesValues(params).join(",")
    const sqlCommand = 'INSERT INTO airports VALUES (' + values + ')';
    db.run(sqlCommand).then((data) => {
        res.json("Aeroporto inserido com sucesso!");
    })
});

var extractObjPropertiesValues = function (obj) {
    var arr = [];
    for (var x in obj) if (obj.hasOwnProperty(x)) {
        if (typeof obj[x] === 'string') {
            arr.push("'" + obj[x] + "'");
        } else {
            arr.push(obj[x]);
        }
    }
    return arr;
}

// PUT
app.put('/api/v1/aeroportos/:iata', (req, res) => {
    const iata = req.params.iata;
    const params = req.body;
       const values = extractObjProperties(params).join(",")
    const sqlCommand = 'UPDATE airports SET ' + values + ' WHERE codigo_iata = "' + iata + '"';
    db.run(sqlCommand).then((data) => {
        res.json("Dados do aeroporto atualizados com sucesso!");
    })
});

 // foi necessário extrair os objetos do cada linha, e posteriormente concatená-los em formato de string
var extractObjProperties = function (obj) {
    var arr = [];
    for (var key in obj) if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (typeof value === 'string') {
            arr.push(key + " = '" + value + "'");
        } else {
            arr.push(key + " = " + value);
        }
    }
    return arr;
}

// DELETE
app.delete('/api/v1/aeroportos/:iata', (req, res) => {
    const iata = req.params.iata;
    const sqlCommand = 'DELETE FROM airports WHERE codigo_iata = "' + iata + '"';
    db.all(sqlCommand).then((data) => {
        res.json("Aeroporto deletado com sucesso!");
    })
});

app.listen(port, () => console.log(`Hello world. Airports API listening on port ${port}!`));