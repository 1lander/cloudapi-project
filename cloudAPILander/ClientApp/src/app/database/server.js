const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var unirest = require('unirest');

unirest.post("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0",)
.header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "c5e533f6a6mshb093e40fbe9bdf5p1d1990jsn2d07ae89a0b3")
.header("Content-Type", "application/x-www-form-urlencoded")
.send("inboundDate=2019-09-10")
.send("cabinClass=business")
.send("children=0")
.send("infants=0")
.send("country=US")
.send("currency=USD")
.send("locale=en-US")
.send("originPlace=SFO-sky")
.send("destinationPlace=LHR-sky")
.send("outboundDate=2019-09-01")
.send("adults=1")
.end(function (result) {
  console.log(result.body);
});

unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-06-06?inboundpartialdate=2019-09-01")
.header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "c5e533f6a6mshb093e40fbe9bdf5p1d1990jsn2d07ae89a0b3")
.end(function (result) {
  console.log(result.body);
});

/*db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen('3000', () => {
  console.log('listening on port 3000')
})
