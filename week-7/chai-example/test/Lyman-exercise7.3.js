function fruits(str) {

    return str.split(',');

}

module.exports = fruits;

var fruits = require("../fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));

    });

});
