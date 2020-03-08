/*
============================================
; Title:  Exercise 3.4.js
; Author: Ashleigh Lyman
; Date:   04 March 2020
; Description: Base server configurations for
;              a fully working Express application.
;===========================================
*/

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 3.2 - Factory patterns', '03/03/2020'));

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
        message: "home page"
    });
});

app.get("/about", function(request, response) {
    response.render("about", {
        message: "about page"
    });
});

app.get("/contact", function(request, response) {
    response.render("contact", {
        message: "contact page"
    });
});

app.get("/products", function(request, response) {
    response.render("products", {
        message: "products page"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080.");
});