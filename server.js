var fs = require('fs');
var path = require('path');
var http = require('http');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 9000));
  
app.use(express.static('./build/'));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});