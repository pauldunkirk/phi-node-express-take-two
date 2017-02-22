console.log('starting up the server< this is a lie for now');

var express = require('express'); // called in express (node does this)
var app = express(); // express now function - puts express into app

app.use(express.static('server/public')); //runs every time there is a request from browser

app.listen(5000); // this will work AFTER you npm start
