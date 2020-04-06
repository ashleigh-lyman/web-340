/*
=======================================
; Title:  app.js
; Author: Ashleigh Lyman
; Date:   05 April 2020
; Description: EMS project
;======================================
*/

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 7.4 - EMS project', '04/05/2020'));

//Empty Line
console.log("\n");

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require('mongoose');

const Employee = require('./models/employee');

var app = express();

// MongoDB connection
var mongoDB = "mongodb+srv://admin:Lymanfamily@buwebdev-cluster-1-akyor.mongodb.net/Lyman-ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//HTTP SET
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//HTTP USE
app.use(logger("short"));

//HTTP GET
app.get("/", function(request, response) {
    //employee function. render index
    Employee.find({}, function(err, employees) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log(employees);
            response.render('index', {
                title: 'EMS HomePage',
                employees: employees
            })
        }
    });
});

//Server. Display message
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
