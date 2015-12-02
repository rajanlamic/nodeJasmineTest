/**
 * Created by Rajan on 02/12/2015.
 */

describe("app", function() {
    var request;
    var serverUrl;

    beforeEach(function() {
        request = require('request');
        serverUrl = "http://localhost:3000";
    })

    afterEach(function() {
        request = null;
        serverUrl = null;
    })

    it("should return app hello", function(done) {
        request(serverUrl, function(error, response, body) {
            expect(body).toEqual('Hello World!')
            done()
        })
    })
});