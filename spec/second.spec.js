/**
 * Created by Rajan on 02/12/2015.
 */


describe('first', function() {
    var second;

    beforeEach(function () {
        second = require('../src/second');
    });

    afterEach(function() {
        second = null;
    });

    it("should return first on calling first", function() {
        expect(second()).toBe('second');
    });

});