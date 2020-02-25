/*
============================================
; Title: Assignment 2.2
; Author: Ashleigh Lyman
; Date: 25 February 2020
; Modified By:
; Description: Hello World server
;===========================================
*/

//Start Program

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 2.2 - Hello World'));


var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res) {
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');

})

http.createServer(app).listen(8080, function() {
    console.log('Application started on port %s', 8080);

})
