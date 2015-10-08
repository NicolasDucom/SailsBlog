/**
 * Created by Nicolas on 10/8/2015.
 */
var request = require('supertest');

describe('UserController', function() {

    describe('get', function() {
        it('should get a list of users', function (done) {
            request(sails.hooks.http.app)
                .get('/user')
                .expect(200,done);
        });
    });

    describe('post', function() {
        var user = { name: 'teasdfst', password: 'test123', email:'tasdfest@tasdfest.com' };
        it('should create a user', function (done) {
            request(sails.hooks.http.app)
                .post('/user')
                .type('form')
                .send(user)
                .expect(201,done);
        });
    });
});


