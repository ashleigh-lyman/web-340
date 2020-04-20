/*
=======================================
; Title:  employee.js
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

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    empID: { type: String, required: true },
    empTitle: { type: String, required: false },
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);
