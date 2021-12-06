// importing and setting up express
const express = require('express');
const app = express();
const port = 8080;

// get json data
const fs = require('fs');
let rawData = fs.readFileSync('exampleJson.json');
let data = JSON.parse(rawData);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// route handlers
app.get('/api', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})