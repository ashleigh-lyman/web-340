/*
============================================
; Title: Assignment 2.3
; Author: Ashleigh Lyman
; Date: 26 February 2020
; Modified By:
; Description: Routes
;===========================================
*/

//Start Program

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 1.3 - Modules'));


var express = require('express');
var http = require('http');

var app = express();

//routes to catch URL messages
app.get('/', function(req, res) {
    res.end('Welcome to the homepage.\n');

});

app.get('/about', function(req, res) {
    res.end('Welcome to the about page.\n');

});

app.get('/contact', function(req, res) {
    res.end('Welcome to the contact page\n');

});

app.use(function(req, res) {
    res.statsCode = 404;
    res.end('404!\n');

});

http.createServer(app).listen(3000, function() {
    console.log('Application started on port %s', 3000);

});
