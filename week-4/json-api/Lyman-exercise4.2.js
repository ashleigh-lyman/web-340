/*
============================================
; Title:  Exercise 4.2.js
; Author: Ashleigh Lyman
; Date:   11 March 2020
; Description: create json api server
;===========================================
*/

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 4.2 - JSON API', '03/11/2020'));

//Empty Line
console.log("\n");


var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.use(logger('dev'));

app.get('/customer/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    res.json({
        firstName: 'Leo',
        lastName: 'Tolstoy',
        employeeId: id
    });
});

http.createServer(app).listen(3000, function() {
    console.log('Application is running on port 3000');

});
