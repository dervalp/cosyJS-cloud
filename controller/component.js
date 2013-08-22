var mongoose = require("mongoose"),
    cloudHelper = require("../helper/cloud"),
    componentModel = mongoose.model("component");

module.exports = {
    get: function(req, res) {

        componentModel.find( { req.params.name } ).exec( function( err, result ) {
            if(err) { res.send(err); }

            if(result) {
                res.send(result);
            } else {
                return res.status(404).send('Not found');
            }
        });
    },
    put: function(req, res) {

        var component = new componentModel(req.body.json);

        cloudHelper.upload(req.body.json, req.body.package, function(){
            component.save(function(err, res) {
                res.send(res);
            });
        });
    }
};