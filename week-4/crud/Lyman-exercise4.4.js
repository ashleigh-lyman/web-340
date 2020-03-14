/*
============================================
; Title:  Exercise 4.4
; Author: Ashleigh Lyman
; Date:   14 March 2020
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/


//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 4.4 - Crud operations'));

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
    response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
