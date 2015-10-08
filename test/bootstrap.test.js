/**
 * Created by Nicolas on 10/8/2015.
 */
var Faker = require('faker');
var Sails = require('sails'),
    sails;


before(function(done) {

    // Increase the Mocha timeout so that Sails has enough time to lift.
    this.timeout(5000);
    process.env.NODE_ENV = 'test';
    Sails.lift({
        // configuration for testing purposes
    }, function(err, server) {
        sails = server;
        if (err) return done(err);
        for (i = 0; i < 10; i++) {
            var name = Faker.fake('{{name.lastName}} {{name.firstName}}');
            var email = Faker.internet.email();
            var password = Faker.internet.password();
            var user = {name:name, email:email, password:password};
            User.create(user);
        }
        done(err, sails);
    });
});

after(function(done) {
    // here you can clear fixtures, etc.
    Sails.lower(done);
});