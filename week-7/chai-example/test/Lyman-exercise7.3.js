/*
============================================
; Title:  Chai Example
; Author: Ashleigh Lyman
; Date:   04 April 2020
; Description: chai Example
;===========================================
*/

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 7.3 - Chai Example'));


var fruits = require("../Lyman-fruits");


var chai = require('chai');
var assert = chai.assert;

describe('fruits', function() {


    it('should return an array of fruits', function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });

});
