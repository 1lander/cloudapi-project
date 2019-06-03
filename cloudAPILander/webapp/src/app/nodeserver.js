const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var unirest = require('unirest');
const app = express();

app.use(cors());

app.get('/getairport/:name', (req, res) => {
    var name = req.params.name;
    unirest.get(`https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=${name}`)
    .header("X-RapidAPI-Host", "cometari-airportsfinder-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "c5e533f6a6mshb093e40fbe9bdf5p1d1990jsn2d07ae89a0b3")
    .end(function (result) {     
        console.log(result.body);
        res.send(result.body);
    });
})

app.get('/getairportbyloc/:lat/:long', (req, res) => {
    var long = req.params.long;
    var lat = req.params.lat;
    unirest.get(`https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius?radius=200&lng=${long}&lat=${lat}`)
    .header("X-RapidAPI-Host", "cometari-airportsfinder-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "c5e533f6a6mshb093e40fbe9bdf5p1d1990jsn2d07ae89a0b3")
    .end(function (result) {
        console.log(result.body);
        res.send(result.body);
    });
})

app.listen('3000', () => {
    console.log('listening on port 3000')
  })
  