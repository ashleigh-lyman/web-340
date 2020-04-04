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


// Required
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the schema
var employeeSchema = new Schema({
    firstName: String,
    lastName: String
});

// Define employees model
var Employee = mongoose.model('employee', employeeSchema);

// Expose the model
module.exports = Employee;


//FMS EXAMPLE

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Fruit Schema
let FruitSchema = new Schema({
    name: { type: String, required: true }
});

// Export the model so its publicly available.
module.exports = mongoose.model('Fruit', FruitSchema);
