/*
=======================================
; Title:  app.js
; Author: Ashleigh Lyman
; Date:   19 April 2020
; Description: EMS project
;======================================
*/

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 9.2 - EMS project', '04/19/2020'));

//Empty Line
console.log("\n");

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var helmet = require("helmet");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

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


// Set up csrf protection
var csrfProtection = csrf({
    cookie: true
});


//HTTP USE
app.use(logger("short"));
app.use(helmet.xssFilter());

app.use(bodyParser.urlencoded({

    extended: true

}));

app.use(cookieParser());
app.use(csrfProtection);


app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});

//HTTP SET
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);


//HTTP GET


//employee function. render index
app.get("/", function(request, response) {
    Employee.find({}, function(error, employees) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            console.log(employees);
            response.render('index', {
                title: 'EMS Home Page',
                employees: employees
            });
        };
    });
});

app.get("/new", function(request, response) {
    response.render("new", {
        title: "New EMS Entry"
    });
});

app.get("/view/:queryName", function(request, response) {

    var queryName = request.params.queryName;

    Employee.find({ 'name': queryName }, function(error, employees) {

        if (error) throw error;

        console.log(employees);

        if (employees.length > 0) {

            response.render("view", {

                title: "Employee Records",

                employee: employees

            })

        } else {

            response.redirect("/list")

        }

    });

});

app.post("/process", function(request, response) {

    debugger;
    if (!request.body.firstName) {
        response.status(400).send('Entries must have a name');
        return;
    }
    if (!request.body.empID) {
        response.status(400).send('Entries must have an employee number');
        return;
    }
    if (!request.body.empTitle) {
        response.status(400).send('Entries must have a title');
        return;
    }

    var employeeFirstName = request.body.firstName;
    var employeeLastName = request.body.lastName;
    var empID = request.body.empID;
    var empTitle = request.body.empTitle;
    console.log(employeeFirstName + " " + employeeLastName);

    var employee = new Employee({
        firstName: employeeFirstName,
        lastName: employeeLastName,
        empID: empID,
        empTitle: empTitle,
    });

    employee.save(function(err) {
        debugger;
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log(employeeFirstName + ' saved successfully!');
            response.redirect('/');
        }
    });

});


//Server. Display message
http.createServer(app).listen(app.get('port'), function() {
    console.log('Application started on port ' + app.get('port'));
});
