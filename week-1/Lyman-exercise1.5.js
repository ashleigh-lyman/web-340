/*
============================================
; Title: Assignment 1.5
; Author: Ashleigh Lyman
; Date: 23 February 2020
; Modified By:
; Description: HTTP request
;===========================================
*/

//Start Program

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 1.5 - HTTP request'));

//start program


var http = require("http");

function processRequest(request, res) {
    var body = "Hey ma, look no hands!";

    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);

//end program
