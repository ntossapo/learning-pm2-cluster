var express = require('express');
var app = express();
var randomWords = require('random-words');
var generated = randomWords()
app.get("/", function(req, res){

	res.end(generated);

});

//console.log(generated + " runnning");
app.listen(8080);
