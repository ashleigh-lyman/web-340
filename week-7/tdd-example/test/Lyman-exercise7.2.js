/*
============================================
; Title: Assignment 7.2
; Author: Ashleigh Lyman
; Date: 02 April 2020
; Modified By:
; Description: TDD test case
;===========================================
*/

//Start Program

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 3.2 - MorganLogging'));


var assert = require('assert');

// Describe the specivications
describe('String#split', function() {

    // Specification with a title and code to run
    it('should return an array of fruits', function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});

// Returns an array made from passed CSV string
function getFruits(str) {
    return str.split(',');
}

// Make function available for testing
module.exports = getFruits;
