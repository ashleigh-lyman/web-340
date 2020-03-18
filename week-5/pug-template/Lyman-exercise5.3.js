/*
============================================
; Title:  Exercise 5.3.js
; Author: Ashleigh Lyman
; Date:   17 March 2020
; Description: Demonstrates the Pug view engine.
;===========================================
*/

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response) {
    response.render("index", {
        message: "Hello and welcome!...This is my Pug Homepage"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});