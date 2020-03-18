/*
============================================
; Title:  Exercise 5.2.js
; Author: Ashleigh Lyman
; Date:   17 March 2020
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/


//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 5.2 - EJS if-else', '03/17/2020'));

//Empty Line
console.log("\n");


var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

//Looks inside views folder for files
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//local name array
var family = ["Joshua", "Ashleigh", "Aiden", "Henry", "Marshall"];

//routes
app.get("/", function(req, res) {
    res.render("index", {
        names: family
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
