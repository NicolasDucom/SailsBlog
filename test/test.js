/**
 * Created by Nicolas on 9/30/2015.
 */
var assert = require('assert');
describe('String#split', function(){
    it('should return an array', function(){
        assert(Array.isArray('a,b,c'.split(',')));
    });
})