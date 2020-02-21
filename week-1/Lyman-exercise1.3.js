/*
============================================
; Title: Assignment 1.3
; Author: Ashleigh Lyman
; Date: 20 February 2020
; Modified By: 
; Description: Using Modules
;===========================================
*/

//Start Program

//Header
var header = require('../Lyman-header');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 1.3 - Modules'));

var url = require('url');

var parsedURL = url.parse('https://github.com/profile?name=AshleighLyman');

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

//End Program