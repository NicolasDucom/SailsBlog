/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var sails = require('sails');
var moment = require('moment');
module.exports = {
    postAction: function(req,res){
        var postContent = req.param("content");
        var postUser = req.user;
        if (typeof postUser == 'undefined'){
            res.send(403, {error: "Not logged in"})
        } else {
            Post.create({content:postContent,user:postUser}).exec(function (err,created){
                if (err) {
                    res.send(500, {error: "DB Error"});
                } else {
                    sails.sockets.blast('post',created);
                    res.send(201);
                }
            });
        }
    },

    getAction: function (req, res) {
        var find = null;
        if(typeof req.param("id") == 'undefined')
            find = Post.find();
        else
            find = Post.find({id: req.param("id")});

        find.populate('user').exec(function(err, data) {
            if (err) res.send(500);
            console.log(data);
            res.view('Post/list', {posts: data, moment:moment, layout: null});
        });
    }

};
