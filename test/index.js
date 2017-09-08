var expect = require("chai").expect;
var assert = require('chai').assert;
var strongTypes = require('../index')();

describe("Strong Types - String", function() {

    it("Successfully pass string back", function(){

        expect(strongTypes.string('hi')).to.equal('hi');

    });

    it("Throw Error when there is a non string value given", function(){

        assert.throws(function(){
            return strongTypes.string(2342)
        }, Error, "Expected string, got: number");

    });

});

describe("Strong Types - Number", function () {


    it("Successfully pass number back", function () {

        expect(strongTypes.number(3)).to.equal(3);

    });

    it("Throw Error when there is a non number value given", function(){

        assert.throws(function(){
            return strongTypes.number("hi")
        }, Error, "Expected number, got: string");

    });

});

describe("Strong Types - Boolean", function () {


    it("Successfully pass boolean back", function () {

        expect(strongTypes.boolean(true)).to.equal(true);

    });

    it("Throw Error when there is a non boolean value given", function(){

        assert.throws(function(){
            return strongTypes.boolean(2332)
        }, Error, "Expected boolean, got: number");

    });

});

describe("Strong Types - Array", function () {


    it("Successfully pass array back", function () {

        var array = [3,4,6];

        expect(strongTypes.array(array)).to.equal(array);

    });

    it("Throw Error when there is a non array value given", function(){

        assert.throws(function(){
            return strongTypes.array("hi")
        }, Error, "Expected array, got: string");

    });

});