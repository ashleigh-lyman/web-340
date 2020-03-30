/*
=======================================
; Title:  app.js
; Author: Ashleigh Lyman
; Date:   29 March 2020
; Description: EMS project
;======================================
*/

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 6.4 - EMS project', '03/29/2020'));

//Empty Line
console.log("\n");



var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {

    response.render("index", {

        title: "EMS HomePage"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
