console.log('starting up the server');

var express = require('express'); // called in express (node does this)
var app = express(); // express now function - puts express into app


app.use(express.static('server/public')); //runs every time there is a request from browser

var fishiesList = [{name: 'walleye'},{name: 'pike'}, {name: 'muskie'}]


app.get('/fish', function(req, res){ // express has already created req and res
  console.log('req', req); //this shows up on Terminal - console.log from client in browser
  res.send(fishiesList); // always need a response of some kind
});

app.get('/fish/first', function(req, res){
  res.send(fishiesList[0]);
});

app.get('/fish/first/name', function(req, res){
  res.send(fishiesList[0].name);
});

app.get('/fish/last', function(req, res){
  res.send(fishiesList[fishiesList.length-1]);
});

app.get('/fish/last/name', function(req, res){
  res.send(fishiesList[fishiesList.length-1].name);
});




app.listen(5000); // this will work AFTER you npm start
