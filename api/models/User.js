/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
      email: {
          type:'email',
          required: true,
          unique: true
      },
      name: {
          type:'string',
          required: true
      },
      password: {
          type:'string',
          minLength: 6,
          required: true
      },
      posts:{
          collection: 'post',
          via: 'user'
      },
      toJSON: function(){
          var obj = this.toObject();
          delete obj.password;
          return obj;
      }
  },
    beforeCreate: function(user, cb){
        bcrypt.genSalt(10,function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err){
                    console.log(err);
                } else {
                    user.password = hash;
                    cb(null, user);
                }
            });
        });
    }
};

