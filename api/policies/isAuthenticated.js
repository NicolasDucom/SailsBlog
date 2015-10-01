/**
 * Created by Nicolas on 10/1/2015.
 */
module.exports = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    else{
        return res.redirect('/login');
    }
};

