var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with welcome to devops 2022', function(done) {
        request(app).get('/will').expect('{ "response": "Hello World" }', done);
    });
});