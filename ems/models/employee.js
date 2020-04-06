/*
=======================================
; Title:  employee.js
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

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    firstName: String,
    lastName: String
});

var Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
