var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.listen(3000,function(req,res){
  console.log("Listenign to Port")
})
