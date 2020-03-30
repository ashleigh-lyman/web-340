/*
============================================
; Title:  Exercise 6.3..js
; Author: Ashleigh Lyman
; Date:   24 March 2020
; Description: Mongoose connection example
;===========================================
*/


//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 6.3 - Mongoose connection', '03/27/2020'));

//Empty Line
console.log("\n");


var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");


var mongoDB = "mongodb+srv://admin:Lymanfamily@buwebdev-cluster-1-akyor.mongodb.net/Lyman-ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});


mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to MongoDB instance");
});


var app = express();
app.use(logger("dev"));


http.createServer(app).listen(5000, function() {
    console.log("Application connected and listening on port 5000");
});
