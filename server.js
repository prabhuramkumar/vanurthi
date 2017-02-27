var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8000));

app.use(express.static(path.join(__dirname, '')));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});