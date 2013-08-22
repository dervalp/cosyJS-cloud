var mongoose = require("mongoose"),
    packageModel = mongoose.model("package");

module.exports = {
    get: function(req, res) {

        packageModel.find( { req.params.name } ).exec( function( err, result ) {
            if(err) { res.send(err); }

            if(result) {
                res.send(result);
            } else {
                return res.status(404).send('Not found');
            }
        });
    },
    put: function(req, res) {

        var package = new packageModel(req.body.json);

        package.save(function(err, res) {
            res.send(res);
        });
    }
};