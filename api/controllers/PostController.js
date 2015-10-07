/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var sails = require('sails');
module.exports = {
    postAction: function(req,res){
        postContent = req.param("content");
        postUser = req.user;
        Post.create({content:postContent,user:postUser}).exec(function (err,created){
            if (err) {
                res.send(500, {error: "DB Error"});
            } else {
                res.send(201);
            }
        });
    },

    getAction: function (req, res) {
        Post.find().populate('user').exec(function(err, data) {
            if (err) res.send(500);
            res.view('Post/list', {posts: data, layout: null});
        });
    }

};
