/**
 * Created by Rajan on 02/12/2015.
 */

describe('first', function() {
    var first;

    beforeEach(function () {
        first = require('../src/first');
    });

    afterEach(function() {
        first = null;
    });

    it("should return first on calling first", function() {
        expect(first()).toBe('first');
    });

});