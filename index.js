var express = require('express');
var mongoose = require('mongoose');
var layouts = require('express-ejs-layouts');
var routes = require('./config/routes');

var app = express();

mongoose.connect("mongodb://localhost/drinkRoulette");

// tell express to use ejs for rendering templates
app.set('view engine' , 'ejs');

// use express layouts middleware too
app.use(layouts);

// add the router last
app.use(routes);

app.listen(3000 , function(){
  console.log('listening on port 3000');
});