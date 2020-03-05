/*
============================================
; Title: Assignment 3.2
; Author: Ashleigh Lyman
; Date: 03 March 2020
; Modified By:
; Description: Morgan-logging
;===========================================
*/

//Start Program

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 3.2 - MorganLogging'));

//requires
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//app variable for express
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
