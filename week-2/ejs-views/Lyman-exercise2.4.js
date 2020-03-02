/*
============================================
; Title:  Exercise 2.4
; Author: Ashleigh Lyman
; Date:   03/01/2020
; Modified by:
; Description: view ejs engine
;===========================================
*/

// require statements for http, express, and path
var http = require('http');
var express = require('express');
var path = require('path');

// initialize app
var app = express();
var port = 8080;


app.set('views', path.resolve(__dirname, 'views'));

// ejs view engine
app.set('view engine', 'ejs');

//Homepage message
app.get('/', function(request, response) {
    response.render('index', {
        firstName: "Ashleigh",
        lastName: "Lyman",
        address: "1234 Broadway Lane",
    });
});
//response to request
app.use(function(request, response) {
    response.statusCode = 404;
    response.end('404!\n');
});

// port server
http.createServer(app).listen(port);
