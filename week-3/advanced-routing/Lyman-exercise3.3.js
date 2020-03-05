/*
============================================
; Title:  Exercise 3.3.js
; Author: Ashleigh Lyman
; Date:   04 March 2020
; Description: Demonstrates advanced routing
;===========================================
*/

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 3.2 - Factory patterns', '03/03/2020'));

//Empty Line
console.log("\n");

//requires
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

//create app for express
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger('dev'));

app.get("/:productId", function(request, response) {
    var productId = parseInt(request.params.productId, 10);

    response.render("index", {
        productId: productId
    });
});

http.createServer(app).listen(3001, function() {
    console.log('Application started and listening on port %s', 3001);

});