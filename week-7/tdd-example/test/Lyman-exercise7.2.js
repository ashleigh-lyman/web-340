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
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 7.2 - TDD test case'));

var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});

function getFruits(str) {

    return str.split(',');

}

module.exports = getFruits;
