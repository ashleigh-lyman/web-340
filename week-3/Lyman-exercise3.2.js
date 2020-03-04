var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set('views', path.resolve(__dirname, 'views')); // Tell Express the views are in the 'views' directory
app.set('view engine', 'ejs'); // Tell Express to use the EJS view engine

app.use(logger('dev'));

app.get('/', function(req, res) {

    res.render('index', {

        message: 'Morgan Logger Example welcomes you!'

    });

});

http.createServer(app).listen(3000, function() {

    console.log('Application started on port %s', 3000);

});
