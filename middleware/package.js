module.exports = {
    validate: function(req, res, next) {
        if(!req.params.name) {
            return res.status(404).send('Not found');
        }
    },
    package: function(req, res, next) {
        if(!req.params.name) {
            return res.status(404).send('Not found');
        }
    }
};